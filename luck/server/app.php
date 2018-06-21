<?php
$data=file_get_contents('data.txt');


$pieces = explode("\n", $data);

echo json_encode($pieces);