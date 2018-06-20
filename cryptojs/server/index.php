<?php

/**
 * 加密数据类
 * Class Data
 * php版本为5.3
 */
class Data
{
    private $iv = '1234567812345678';
    private $key = '96e79218965eb72c92a549dd5a330112';
    private $data;

    /**
     * 数据初始化和数据操作选项
     * Data constructor.
     * @param $data
     * @param $static
     */
    public function __construct($data, $static)
    {
        switch ($static) {
            case 1:
                if (is_array($data)) {
                    $this->data = implode(",", $data);
                }
                $this->dataBase64Encode();
                break;
            case 2:
                if (is_string($data)) {
                    $this->data = base64_decode($data);
                }
                $this->dataBase64Decode();
        }
    }

    /**
     *数据加密方法
     */
    private function dataBase64Encode()
    {
        $encodeData = mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $this->key, $this->data, MCRYPT_MODE_CBC, $this->iv);
        $this->returnDate(base64_encode($encodeData));
    }

    /**
     *数据解密方法
     */
    private function dataBase64Decode()
    {
        $decodeData = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $this->key, $this->data, MCRYPT_MODE_CBC, $this->iv);
        echo $decodeData;
    }

    /**
     * 组合返回数据
     * @param $data
     */
    private function returnDate($data)
    {
        $array = array(
            'iv' => $this->iv,
            'key' => $this->key,
            'data' => $data
        );

        echo json_encode($array, true);
    }

}

$array = array(
    'a','b','c','d','e','f','g','h','i'
);

new Data($array, 1);
