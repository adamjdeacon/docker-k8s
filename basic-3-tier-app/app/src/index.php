<?php

echo "hello, world, I'm " . $_ENV['NODE_NAME'] . ". Nice to meet you" . PHP_EOL;
echo "The time is: " . date('l jS \of F Y h:i:s A') . PHP_EOL;

print_r($_SERVER);
print_r($_ENV);
