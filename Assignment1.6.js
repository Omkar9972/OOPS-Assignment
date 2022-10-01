array = [23, 17, 16, 32, 7, 12, 27, 46, 16, 29];

        function evenNum(arr1) {

            result = 0;

            for (let i = 0; i < arr1.length; i++) {

                if (arr1[i] % 2 == 0) {

                    result = result + arr1[i];

                }

            }

            if (result == 0) {

                console.log("No even numbers found");

            }

            return result

        }

        console.log(evenNum(array));