<?php

namespace App\ApiRequests;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class YoutubeChannel
{
    private string $url;
    private string $playlistId;
    private string $apiKey;
    private HttpClientInterface $client;

    public function __construct(HttpClientInterface $client, string $url, string $playlistId, string $apiKey)
    {
        $this->client = $client;
        $this->url = $url;
        $this->playlistId = $playlistId;
        $this->apiKey = $apiKey;
    }

    /**
     * fetch Youtube Playlist Items
     *
     * @return null|array
     */
    public function fetchYoutubePlaylistItems()
    {
        $feature = 'playlistItems';

        $response = $this->client->request(
            'GET',
            $this->url.$feature.'?key='.$this->apiKey.'&playlistId='.$this->playlistId.'&part=snippet&maxResults=50',
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
