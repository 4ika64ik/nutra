<?php
require_once dirname(__FILE__) . '/kclient.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$subId = $_POST['sub_id'];
$ip = $_SERVER['REMOTE_ADDR'];
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$referer = $_SERVER['HTTP_REFERER'];

$data = array(
    'name' => $name,
    'phone' => $phone,
    'api_key' => '4fUUsYxmc9xXt8R7',
    'target_hash' => 'Bw9dev12',
    'country_code' => 'PE',
    'data1' => '',
    'data2' => '',
    'data3' => '',
    'data4' => '',
    'clickid' => $subId,
    'sub_id' => $subId,
    'ip' => $ip,
    'user_agent' => $userAgent,
    'referer' => $referer,
    'browser_locale' => $_SERVER['HTTP_ACCEPT_LANGUAGE']
);

$client = new KClient('https://andepe.store/', 'QtwMT2SmN52kMZTV');
$client->sendAllParams();
$client->param('sub_id_5', $subId);
$client->execute();

echo json_encode(array('status' => 'success', 'message' => 'Form submitted successfully'));
?>
