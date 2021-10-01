<?php

namespace App\ApiRequests;

use Exception;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class YoutubeChannel
{
    private string $url;
    private string $channelId;
    private string $apiKey;
    private HttpClientInterface $client;

    public function __construct(HttpClientInterface $client, string $url, string $channelId, string $apiKey)
    {
        $this->client = $client;
        $this->url = $url;
        $this->channelId = $channelId;
        $this->apiKey = $apiKey;
    }

    /**
     * fetch Youtube Playlist Id
     *
     * @return string|null
     */
    public function fetchYoutubePlaylistId()
    {
        $feature = 'channels';

        $response = $this->client->request(
            'GET',
            $this->url.$feature.'?part=contentDetails&key='.$this->apiKey.'&id='.$this->channelId,
            [
                'headers' => [
                    'Accept'=>'application/json'
                ]
            ]
        );

        if( $response->getStatusCode() != 200 ){
            return null;
        }

        $channelDetails = json_decode( $response->getContent() );
        return $channelDetails->items[0]->contentDetails->relatedPlaylists->uploads;
    }

    /**
     * fetch Youtube Playlist Items
     *
     * @return null|array
     */
    public function fetchYoutubePlaylistItems()
    {
        $feature = 'playlistItems';

        $playlistId = $this->fetchYoutubePlaylistId();

        if(null == $playlistId){
            return null;
        }

        $response = $this->client->request(
            'GET',
            $this->url.$feature.'?key='.$this->apiKey.'&playlistId='.$playlistId.'&part=contentDetails&part=snippet&maxResults=50',
            [
                'headers' => [
                    'Accept'=>'application/json'
                ]
            ]
        );

        if( $response->getStatusCode() != 200 ){
            return null;
        }

        return json_decode($response->getContent())->items;
    }


}
