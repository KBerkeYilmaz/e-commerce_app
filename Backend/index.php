<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');
// 1st implementation
$data = json_decode(file_get_contents("PHP://input"), true);

class Product {

    public string $type;
    public int $price;
    public string $sku;
    public string $name;

    public function __construct ($name, $sku, $price, $type) {
        $this->name = $name;
        $this->sku = $sku;
        $this->price = $price;
        $this->type = $type;
    }
    
    function get_name() {
        return $this->name;
    }

    function get_sku() {
        return $this->sku;
    }

    function get_price() {
        return $this->price;
    }

    function get_type() {
        return $this->type;
    }

};

if ($data) {
    $name = $data['name'] ?? '';
    $sku = $data['sku'] ?? '';
    $price = $data['price'] ?? '';
    $type = $data['productType'] ?? '';

    $product1 = new Product($name,$sku,$price,$type);
    

    $productData = array(
        'id' => $sku,
        'name' => $name,
        'price' => $price,
        'productType' => $type
    );
    
    echo json_encode($productData);
} else {
    echo json_encode(['error' => 'No JSON data received']);
}



