<?php 
require_once 'vendor/autoload.php';

$appId = null;

function mustachify($appId, $picture, $email)
{
  error_log($email);
  $_url = 'http://mustachify.me/?src=' . urlencode(str_replace('type=square', 'type=large', $picture));
  ini_set('SMTP', 'localhost');
  $ret = mail(
    $email, 
    'You\'ve been Hull-stachified!', "Check it out at $_url\r\r Cheers,\r The Hull team.",
    'From: stuff@hull.io'
  );
  //error_log($ret);
}



function findUser($userId)
{
  global $appId;
  $hullClient = new Hull_Client(array(
    "hull" => array(
      "host"  => getenv('HULL_ORG_URL'), 
      "appId" => $appId,
      "appSecret" => getenv('HULL_APP_SECRET')
    )
  ));
  return $hullClient->get($userId);
}

function getImageURL($imageId)
{
  global $appId;
  $hullClient = new Hull_Client(array(
    "hull" => array(
      "host"  => getenv('HULL_ORG_URL'), 
      "appId" => $appId,
      "appSecret" => getenv('HULL_APP_SECRET')
    )
  ));
  return $hullClient->imageUrl($imageId);
}

function sendImageByMail($imageURL, $userEmail)
{
  error_log($imageURL);
  error_log($userEmail);
}


$payload = json_decode(file_get_contents('php://input'), true);

if ($payload && $payload['objectType'] === 'activity' && $payload['eventName'] === 'create') {
  $data  = $payload['data'];
  $appId = $payload['appId'];
  $image = $data['object'];
  $user = findUser($image['resourceful_id']);

  sendImageByMail(getImageURL($image['id']), $user->identities[0]->email);
}

exit();

