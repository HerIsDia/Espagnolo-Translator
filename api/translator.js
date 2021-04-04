"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (req, res) {
    try {
        req.body;
        var text = req.query.text;
        var translator = text;
        var words = translator.split(/[^A-zÀ-ú]/g);
        var nonWords_1 = translator.replace(/[A-zÀ-ú]/g, '').split('');
        var resText_1 = '';
        words.forEach(function (word, i) {
            if (word !== '') {
                if (nonWords_1[i] != "'") {
                    switch (word.charAt(word.length - 1)) {
                        case 'o':
                            break;
                        case 'e':
                        case 'é':
                        case 'è':
                        case 'ê':
                            if (word.charAt(word.length - 2).match(/[^aeio]/g)) {
                                word = word.slice(0, -1) + 'o';
                            }
                            else {
                                word += 'o';
                            }
                            break;
                        case 'u':
                            if (word.charAt(word.length - 2) == 'q') {
                                break;
                            }
                            else {
                                word += 'o';
                                break;
                            }
                        case 's':
                            if (word.charAt(word.length - 2) == 'e' &&
                                word.charAt(word.length - 3).match(/[^aeiou]/g)) {
                                word = word.slice(0, -2) + 'os';
                            }
                            else {
                                word += 'o';
                            }
                            break;
                        default:
                            word += 'o';
                            break;
                    }
                }
                resText_1 += word + (nonWords_1[i] !== undefined ? nonWords_1[i] : ' ');
            }
            else {
                resText_1 += nonWords_1[i] !== undefined ? nonWords_1[i] : ' ';
            }
        });
        res.status(200).json({
            result: resText_1,
        });
    }
    catch (error) {
        return res.status(400).json({ error: 'My custom 400 error' });
    }
});
