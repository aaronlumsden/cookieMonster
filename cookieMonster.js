function CookieMonster() {

    this.set = function($name, $value, $days) {

        var date = new Date();
        date.setTime(date.getTime() + ($days * 24 * 60 * 60 * 1000));
        var expires = "expires=" + date.toUTCString();
        document.cookie = $name + "=" + $value + "; " + expires;

    };

    this.get = function($name) {

        var name = $name + "=";
        var pairs = this.getPairs();
        for (var i = 0; i < pairs.length; i++) {
            var c = pairs[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";

    };

    this.update = function($name, $value, $days) {
        this.set($name, $value, $days);
    };

    this.delete = function($name) {
        document.cookie = $name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    };

    this.exists = function($name) {

        return (this.get($name) !== '') ? true : false;

    };

    this.getAll = function() {

        var pairs = this.getPairs();
        var cookies = {};

        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("=");
            cookies[pair[0]] = unescape(pair[1]);
        }

        return (pairs === '') ? false : cookies;

    };

    this.getPairs = function() {
        return document.cookie.split(";");

    };

    this.count = function() {

        var pairs = this.getPairs();

        return (pairs === '') ? 0 : pairs.length;

    };


}



