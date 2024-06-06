<?php
header('Content-Type: application/json');

// Получаем данные из запроса
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['message' => 'No data received']);
    exit;
}

$params = [
    'api_key' => $data['api_key'],
    'phone' => $data['phone'],
    'target_hash' => $data['target_hash'],
    'country_code' => $data['country_code'],
    'name' => $data['name'],
    'data1' => isset($data['data1']) ? $data['data1'] : '',
    'data2' => isset($data['data2']) ? $data['data2'] : '',
    'data3' => isset($data['data3']) ? $data['data3'] : '',
    'data4' => isset($data['data4']) ? $data['data4'] : '',
    'clickid' => isset($data['clickid']) ? $data['clickid'] : '',
    'ip' => getUserIp(),
    'user_agent' => !empty($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '',
    'referer' => !empty($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '',
    'browser_locale' => getBrowserLocale()
];

$ch = curl_init('https://api.aff1.com/v3/lead.create');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode == 200) {
    echo json_encode(['message' => 'Lead created successfully']);
} else {
    echo json_encode(['message' => 'Failed to create lead', 'response' => $response], JSON_UNESCAPED_UNICODE);
}

function getUserIp()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }

    return $ip;
}

function getBrowserLocale()
{
    $accept_language = !empty($_SERVER['HTTP_ACCEPT_LANGUAGE']) ? $_SERVER['HTTP_ACCEPT_LANGUAGE'] : '';

    return mb_substr($accept_language, 0, 2);
}
