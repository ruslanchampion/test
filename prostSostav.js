<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OddEven</title>
</head>

<body>
    <input class="input" type="number">
    <button id="gen">generation</button>
    <input class="output" type="text">

    <script>

        function newFunction(huy) {
            huy = document.querySelector('.input').value;
            let o = document.querySelector('.output');
            nextPrime: for (let i = 2; i <= huy; i++) {
                for (let j = 2; j < i; j++) {
                    if (i % j == 0) {
                        o.value = `${i} составное`;
                        continue nextPrime;
                    }
                } o.value = (`${i} простое`);
            }
        

        }

        gen.addEventListener("click", newFunction);

    </script>
</body>

</html>
