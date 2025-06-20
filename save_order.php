
<?php
include 'db.php';
$data = json_decode(file_get_contents('php://input'), true);
if (!$data || !isset($data['items']) || !isset($data['customer_name']) || !isset($data['customer_phone'])) {
    echo json_encode(['status' => 'error', 'message' => 'Hakuna data halali iliyopokelewa.']);
    exit;
}
$customer_name = $conn->real_escape_string($data['customer_name']);
$customer_phone = $conn->real_escape_string($data['customer_phone']);
foreach ($data['items'] as $item) {
    $name = $conn->real_escape_string($item['name']);
    $price = (int)$item['price'];
    $sql = "INSERT INTO food_orders (item_name, price, customer_name, customer_phone)
            VALUES ('$name', $price, '$customer_name', '$customer_phone')";
    if (!$conn->query($sql)) {
        echo json_encode(['status' => 'error', 'message' => 'DB error']);
        exit;
    }
}
echo json_encode(['status' => 'success']);
?>
