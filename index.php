<?php 
require_once 'vendor/autoload.php';


function mustachify($appId, $_url, $userId)
{
    $_url = 'http://mustachify.me/?src=' . urlencode(str_replace('type=square', 'type=large', $_url));
    $data = array(
      'source_url' => $_url,
      'name' => 'stache',
      'description' => $_url
    );

    $appSecret = 'APP_SECRET';
    $host = "ORG_URL";

    $hullClient = new Hull_Client(array(
      "hull" => array(
        "host"  => $host, 
        "appId" => $appId,
        "appSecret" => $appSecret,
        "userId" => $userId
      )
    ));

    $ret = $hullClient->post($userId . '/images', $data);
}

try {
  $payload = json_decode(file_get_contents('php://input'), true);
} catch (Exception $e) {
  error_log(print_r($e, true));
  exit();
}

if ($payload && $payload['objectType'] === 'user_profile') {
  if ($payload['data']['user']) {
    $picture  = $payload['data']['user']['picture'];
    $userId   = $payload['data']['user']['id'];
    mustachify($payload['appId'], $picture, $userId);
  } else {
    exit();
  }
}

