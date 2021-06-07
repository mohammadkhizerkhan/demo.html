        //A Javascript Program to illustrate Caesar Cipher Technique

        // Encrypts text using a shift od s
        function encrypting(text, s) {
            var text = document.getElementById("encrypt").value;
            // var syntax = esprima.parse(text);
            let result = ""
            for (let i = 0; i < text.length; i++) {
                let char = text[i];
                if (char.toUpperCase(text[i])) {
                    let ch = String.fromCharCode((char.charCodeAt() + s));
                    result += ch;
                } else if (char.toLowerCase(text[i])) {
                    let ch = String.fromCharCode((char.charCodeAt() + s));
                    result += ch;
                }
            }
            document.getElementById('decrypt').value = "" + result;

            return result;
        }