<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');

class ProductFactory
{
    public $productTypes;

    public function __construct()
    {
        $this->productTypes = [
            'disk' => function ($name, $sku, $price, $additionalData) {
                return new DISK($name, $sku, $price, 'disk', $additionalData['size']);
            },
            'furniture' => function ($name, $sku, $price, $additionalData) {
                return new Furniture($name, $sku, $price, 'furniture', $additionalData['height'], $additionalData['width'], $additionalData['length']);
            },
            'book' => function ($name, $sku, $price, $additionalData) {
                return new Book($name, $sku, $price, 'book', $additionalData['weight']);
            },
        ];
    }

    public function createProduct($type, $name, $sku, $price, $additionalData)
    {
        if (!array_key_exists($type, $this->productTypes)) {
            throw new Exception("Invalid product type: $type");
        }
        return $this->productTypes[$type]($name, $sku, $price, $additionalData);
    }
}


class Product
{
    private $id; // changed from private to public
    public string $type;
    public int $price;
    public string $sku;
    public string $name;

    public function __construct($name, $sku, $price, $type)
    {
        $this->name = $name;
        $this->sku = $sku;
        $this->price = $price;
        $this->type = $type;
    }
};

class DISK extends Product
{
    public int $size;

    public function __construct($name, $sku, $price, $type, $size) // added $size
    {   
        parent::__construct($name, $sku, $price, $type);
        $this->size = $size;
    }
}

class Furniture extends Product
{
    public int $height;
    public int $width;
    public int $length;

    public function __construct($name, $sku, $price, $type, $height, $width, $length) // added $height, $width, $length
    {
        parent::__construct($name, $sku, $price, $type);
        $this->height = $height;
        $this->width = $width;
        $this->length = $length;
    }
}

class Book extends Product
{
    public int $weight;

    public function __construct($name, $sku, $price, $type, $weight) // added $weight
    {
        parent::__construct($name, $sku, $price, $type);
        $this->weight = $weight;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("PHP://input"), true);

    if ($data) {
        $name = $data['name'] ?? '';
        $sku = $data['sku'] ?? '';
        $price = $data['price'] ?? '';
        $type = $data['productType'] ?? '';

        // Use the factory to create a product of the correct type
        $productFactory = new ProductFactory();
        $product = $productFactory->createProduct($type, $name, $sku, $price, $data);
        
        // Generate a unique ID and assign it to the product
        $product->id = uniqid();

        $productData = array(
            'id' => $product->id, // Changed from $sku to $product->id
            'sku' => $sku,
            'name' => $name,
            'price' => $price,
            'productType' => $type
        );

        // Save the product to a file
        file_put_contents('products.json', json_encode($productData) . "\n", FILE_APPEND);

        $responseData = array(
            'sku' => $sku,
            'name' => $name,
            'price' => $price,
            'productType' => $type
        );
        
        echo json_encode($responseData);
    } else {
        echo json_encode(['error' => 'No JSON data received']);
    }
} elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Read the products from the file
    $products = explode("\n", file_get_contents('products.json'));
    $products = array_filter($products); // Remove empty lines

    // Decode the JSON data to PHP arrays
    $products = array_map('json_decode', $products);
    $responseData = array_map(function($product) {
        return array(
            'sku' => $product->sku,
            'name' => $product->name,
            'price' => $product->price,
            'productType' => $product->productType
        );
    }, $products);

    echo json_encode($responseData);
}
