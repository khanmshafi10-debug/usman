// eslint-disable-next-line no-implicit-globals
var Ktag_Constants = function() {

    return {
        KENSHOO_GCLID_NAME: "ken_gclid",
        GOOGLE_ADS_CLICK_PARAM_NAME: "_gac",
        GOOGLE_ADS_GL_PARAM_NAME: "_gl",
        GOOGLE_CLICK_ID_PARAM_NAME: "gclid",
        BING_CLICK_ID_PARAM_NAME: "msclkid",
        NO_PUBLISHER_CLICK_ID_PARAM_NAME: "npclid",
        AMP_CHANNEL_CLICK_ID_COOKIE_NAME: "ken_amp_gclid",
        AMP_LINKER_PARAM_NAME: "linker",
        UNIVERSAL_CHANNEL_PARAM_NAME: "kclid",
        UNIVERSAL_CHANNEL_COOKIE_NAME: "ken_uc",
        KPID_NAME: "ken_pid",
        GBRAID_NAME: "gbraid",
        WBRAID_NAME: "wbraid",
        KENSHOO_GBRAID_NAME: "ken_gbraid",
        KENSHOO_WBRAID_NAME: "ken_wbraid",
        KENSHOO_PID_NAME: "ken_pid",
        KENSHOO_UUID_NAME: "ken_uuid"
    };
}();
// eslint-disable-next-line no-implicit-globals
var Ktag_Toggles = function() {

    return {

        isParseAmpLinkerParameters: function() {
            return false;
        },

        isUseNpclid: function() {
            return true;
        },

        isSupportFloodlightTag: function() {
            return false;
        },

        // Test
        isDummyEnabled: function() {
            return true;
        },

        isDummyDisabled: function() {
            return false;
        },

        isDummyEnabledForDummyTids: function() {
            return false;
        },

        isDummyDisabledForDummyTids: function() {
            return true;
        },

        getDummyString: function() {
            return 'Hello';
        },

        getDummyNumber: function() {
            return 5;
        },

        isSupportGWbraid: function() {
            return true;
        },

        isSupportKenPid: function() {
            return false;
        },

        isSupportIframe: function() {
            return false;
        },

        isParseGoogleAdsParameter: function() {
            return false;
        }

    };
}();
// eslint-disable-next-line no-implicit-globals
var Ktag_Amp_Helpers = function() {

    var DELIMITER = '*';
    var KEY_VALIDATOR = /^[a-zA-Z0-9\-_.]+$/;
    var base64UrlDecodeSubs = {
        '-': '+',
        '_': '/',
        '.': '='
    };

    var parseLinkerParamValue = function(value) {
        var parts = value.split(DELIMITER);
        var isEven = parts.length % 2 == 0;

        if (parts.length < 4 || !isEven) {
            // Format <version>*<checksum>*<key1>*<value1>
            // Note: linker makes sure there's at least one pair of non empty key value
            // Make sure there is at least three delimiters.
            return null;
        }

        parts.shift();
        parts.shift();

        if (!parts) {
            return null;
        }

        return deserialize(parts);
    };

    var deserialize = function(params) {
        var keyValuePairs = {};

        for (var i = 0; i < params.length; i += 2) {
            var key = params[i];
            var valid = KEY_VALIDATOR.test(key);

            if (!valid) {
                continue;
            }

            keyValuePairs[key] = decode(params[i + 1]);

            if (!keyValuePairs[key]) {
                return null;
            }
        }
        return keyValuePairs;
    };

    var decode = function(value) {
        if (isInvalidValue(value)) {
            return null;
        }

        return atob(value.replace(/[-_.]/g, function(ch) {
            return base64UrlDecodeSubs[ch];
        }));
    };

    var isInvalidValue = function(value) {
        return !value || value === " ";
    };

    return {
        parseLinker: function(value) {
            return parseLinkerParamValue(value);
        }
    };
}();
// eslint-disable-next-line no-implicit-globals
var Ktag_Helpers = function() {

    var amp_helper = Ktag_Amp_Helpers;
    var kenshooConstants = Ktag_Constants;
    var kenshooToggles = Ktag_Toggles;

    var createRandomUUID = function() {
        var uuid = [];
        for (var i = 0; i < 256; i++) {
            uuid[i] = (i < 16 ? '0' : '') + i.toString(16);
        }
        var d0 = randomUuidDigit();
        var d1 = randomUuidDigit();
        var d2 = randomUuidDigit();
        var d3 = randomUuidDigit();
        return uuid[d0 & 0xff] + uuid[d0 >> 8 & 0xff] + uuid[d0 >> 16 & 0xff] + uuid[d0 >> 24 & 0xff] + '-' + uuid[d1 & 0xff] + uuid[d1 >> 8 & 0xff] + '-' + uuid[d1 >> 16 & 0x0f | 0x40] + uuid[d1 >> 24 & 0xff] + '-' + uuid[d2 & 0x3f | 0x80] + uuid[d2 >> 8 & 0xff] + '-' + uuid[d2 >> 16 & 0xff] + uuid[d2 >> 24 & 0xff] + uuid[d3 & 0xff] + uuid[d3 >> 8 & 0xff] + uuid[d3 >> 16 & 0xff] + uuid[d3 >> 24 & 0xff];
    };

    var randomUuidDigit = function() {
        return Math.random() * 0x100000000 >>> 0;
    };

    var formatStr = function() {
        var formattedStr, args, index;
        formattedStr = arguments[0];
        args = [];
        for (index = 1; index < arguments.length; index++) {
            args.push(arguments[index]);
        }
        for (index in args) {
            formattedStr = formattedStr.replace(/%[a-z]/, args[index]);
        }
        return formattedStr;
    };

    function getUrl() {
        if (Ktag_Toggles.isSupportIframe() && window.location !== window.top.location) {
            return window.top.location.href;
        } else {
            return window.location.href;
        }
    }

    return {
        loadPixel: function(url, onloadCallback) {
            var protocol = document.location.protocol;
            if (protocol.indexOf("http") !== 0) {
                protocol = "https:";
            }
            var img = new Image(1, 1);
            img.onload = onloadCallback;
            img.src = protocol + "//" + url;
            return img;
        },

        getParameter: function(name, url) {
            var index = url.indexOf('?');
            if (index == -1) {
                return null;
            }
            var params = url.substring(index + 1).split("&");

            for (var i = 0; i < params.length; i++) {
                var val = params[i].split("=");
                if (val[0] === name) {
                    return val[1];
                }
            }
            return null;
        },

        generateUUID: function() {
            return createRandomUUID();
        },

        getDomainCookie: function(name) {
            if (!name) {
                name = "k_user_id";
            }
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },

        createDomainCookie: function(name, value, expiryInMillis, domain) {
            if (!name) {
                return;
            }
            if (!value) {
                value = createRandomUUID();
            }
            if (!expiryInMillis) {
                expiryInMillis = 31536000000; //Default is 1 year
            }
            var date = new Date();
            date.setTime(date.getTime() + expiryInMillis);
            var expires = "; expires=" + date.toGMTString();
            var domainStr = "";
            if (domain) {
                domainStr = "; domain=" + domain;
            }
            document.cookie = name + "=" + value + expires + domainStr + "; path=/";
            return value;
        },

        createRandomDomainCookie: function(name, expiryInMillis) {
            return this.createDomainCookie(name, "", expiryInMillis);
        },

        isEmptyString: function(param) {
            if (param === undefined || param === null) {
                return true;
            }
            if (Ktag_Helpers.isString(param)) {
                return Ktag_Helpers.trim(param) === "";
            }
            if (Ktag_Helpers.isNumber(param)) {
                return false;
            }
            return true;
        },

        isNumber: function(param) {
            return typeof param === "number";
        },

        isString: function(param) {
            return typeof param === "string";
        },

        trim: function(str) {
            return str.replace(/^\s+|\s+$/g, "");
        },

        getDomain: function() {
            return window.location.host;
        },

        makeCORSRequestGET: function(url, callback) {
            this.makeCORSRequest(url, callback, 'GET');
        },

        makeCORSRequest: function(url, callback, method, body) {
            var xhr = new XMLHttpRequest();
            if ("withCredentials" in xhr) {
                xhr.open(method, url, true);
                xhr.withCredentials = true;
            } else if (typeof XDomainRequest != "undefined") {
                xhr = new XDomainRequest();
                xhr.open(method, url);
            } else {
                xhr = null;
            }

            if (xhr) {
                xhr.onload = function() {
                    if (xhr.status == 200) {
                        callback(xhr.responseText);
                    } else if (xhr.status == 404) {
                        callback(null);
                    }
                };
                xhr.onerror = function() {
                    callback(null);
                };

                xhr.send(body);
            }
        },

        isValidUUID: function(str) {
            var regexUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
            return regexUUID.test(str);
        },

        isValidKenshooId: function(str) {
            var regexUUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i;
            return regexUUID.test(str);
        },

        isValidGclid: function(str) {
            var regex = /^[A-Za-z0-9_-]{20,120}$/;
            return regex.test(str);
        },

        isValidMsclkid: function(str) {
            var regex = /^[A-Fa-f0-9]{32}$/;
            return regex.test(str);
        },

        isValidGbraid: function(str) {
            var regex = /^0AAAA.{29}$/;
            return regex.test(str);
        },

        isValidWbraid: function(str) {
            var regex = /^C[A-Za-z0-9_-].{60,130}$/;
            return regex.test(str);
        },

        //Code taken from https://stackoverflow.com/questions/8253136/how-to-get-domain-name-only-using-javascript with a small modification to support kenshooprd.local
        //Supported domains are limited but not dramatic. Performance is good (~48K/sec).
        //Performance tests: https://jsperf.com/cookie-tld
        getSecondLevelDomain: function(domain) {
            if (!domain) {
                return null;
            }
            // http://data.iana.org/TLD/tlds-alpha-by-domain.txt
            var TLDs = ["ac", "ad", "ae", "aero", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "arpa", "as", "asia", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "biz", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cat", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "com", "coop", "cr", "cu", "cv", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "edu", "ee", "eg", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gov", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "info", "int", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jobs", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mil", "mk", "ml", "mm", "mn", "mo", "mobi", "mp", "mq", "mr", "ms", "mt", "mu", "museum", "mv", "mw", "mx", "my", "mz", "na", "name", "nc", "ne", "net", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "org", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "pro", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "st", "su", "sv", "sy", "sz", "tc", "td", "tel", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "travel", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xn--0zwm56d", "xn--11b5bs3a9aj6g", "xn--3e0b707e", "xn--45brj9c", "xn--80akhbyknj4f", "xn--90a3ac", "xn--9t4b11yi5a", "xn--clchc0ea0b2g2a9gcd", "xn--deba0ad", "xn--fiqs8s", "xn--fiqz9s", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--g6w251d", "xn--gecrj9c", "xn--h2brj9c", "xn--hgbk6aj7f53bba", "xn--hlcj6aya9esc7a", "xn--j6w193g", "xn--jxalpdlp", "xn--kgbechtv", "xn--kprw13d", "xn--kpry57d", "xn--lgbbat1ad8j", "xn--mgbaam7a8h", "xn--mgbayh7gpa", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgberp4a5d4ar", "xn--o3cw4h", "xn--ogbpf8fl", "xn--p1ai", "xn--pgbs0dh", "xn--s9brj9c", "xn--wgbh1c", "xn--wgbl6a", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--yfro4i67o", "xn--ygbi2ammx", "xn--zckzah", "xxx", "ye", "yt", "za", "zm", "zw"].join();

            var parts = domain.split('.');
            if (parts[0] === 'www' && parts[1] !== 'com') {
                parts.shift();
            }
            var ln = parts.length;
            var i = ln;
            var minLength = parts[parts.length - 1].length;
            var part;

            // iterate backwards
            while ((part = parts[--i]) !== null) {
                // stop when we find a non-TLD part
                if (i === 0 || i < ln - 2 || part.length < minLength || TLDs.indexOf(part) < 0 && i < ln - 1) {
                    //return part
                    return parts.slice(i, parts.length).join('.');
                }
            }

            return domain;
        },

        createSecondLevelDomainCookie: function(name, value, domain) {
            if (!name) {
                return;
            }

            if (!value) {
                return;
            }
            var sld = this.getSecondLevelDomain(domain);
            this.createDomainCookie(name, value, null, sld);
        },

        getChannelClickIdFromUri: function() {
            var channelClickId = this.getValidGclidFromUrl();
            if (!channelClickId) {
                channelClickId = this.getValidMsclkidFromUrl();

                if (Ktag_Toggles.isUseNpclid() && !channelClickId) {
                    channelClickId = this.getValidNpclidFromUrl();
                }
            }
            return channelClickId;
        },
        storeGclidFromGoogleAdsParam: function() {
            var _gacParameter = this.readChannelClickIdFromUrl(kenshooConstants.GOOGLE_ADS_CLICK_PARAM_NAME);
            if (_gacParameter) {
                var gclidFromGoogleAds = _gacParameter.split('.').pop();
                if (this.isValidGclid(gclidFromGoogleAds)) {
                    this.createSecondLevelDomainCookie(kenshooConstants.KENSHOO_GCLID_NAME, gclidFromGoogleAds, document.domain);
                }
            }
        },

        storeGclidFromGoogleAdsGLParam: function() {
            var _glParameter = this.readChannelClickIdFromUrl(kenshooConstants.GOOGLE_ADS_GL_PARAM_NAME);
            if (_glParameter) {
                var _gcl_dcParameter = _glParameter.match(new RegExp("\\*_gcl_dc\\*([A-Za-z0-9+/=]+)"));
                if (_gcl_dcParameter && _gcl_dcParameter[1]) {
                    var base64Decoded = decodeURIComponent(atob(_gcl_dcParameter[1]));
                    var extractedGclid = base64Decoded.split('.').pop();
                    if (this.isValidGclid(extractedGclid)) {
                        this.createSecondLevelDomainCookie(kenshooConstants.KENSHOO_GCLID_NAME, extractedGclid, document.domain);
                        return true;
                    }
                }
            }
            return false;
        },

        storeChannelClickId: function() {
            var channelClickId = this.getChannelClickIdFromUri();

            if (channelClickId) {
                this.createSecondLevelDomainCookie(kenshooConstants.KENSHOO_GCLID_NAME, channelClickId, document.domain);
            } else {
                if (Ktag_Toggles.isParseAmpLinkerParameters()) {
                    var linkerParams = this.getAmpLinkerParamsFromUrl();
                    this.createCookiesFromLinkerParameters(linkerParams);
                }
                if (Ktag_Toggles.isParseGoogleAdsParameter()) {
                    this.storeGclidFromGoogleAdsGLParam() || this.storeGclidFromGoogleAdsParam();
                }
                Ktag_Helpers.storeUniversalChannelClickId();
            }

            if (Ktag_Toggles.isSupportGWbraid()) {
                var validGbraid = this.getValidGbraidFromUrl();
                if (validGbraid) {
                    this.createSecondLevelDomainCookie(kenshooConstants.KENSHOO_GBRAID_NAME, validGbraid, document.domain);
                }

                var validWbraid = this.getValidWbraidFromUrl();
                if (validWbraid) {
                    this.createSecondLevelDomainCookie(kenshooConstants.KENSHOO_WBRAID_NAME, validWbraid, document.domain);
                }
            }
            if (Ktag_Toggles.isSupportKenPid()) {
                var validKpid = this.getValidKenPidFromUrl();
                if (validKpid) {
                    this.createSecondLevelDomainCookie(kenshooConstants.KENSHOO_PID_NAME, validKpid, document.domain);
                    var uuid = createRandomUUID();
                    this.createSecondLevelDomainCookie(kenshooConstants.KENSHOO_UUID_NAME, uuid, document.domain);
                }
            }
        },

        readChannelClickIdFromUrl: function(paramName, url) {
            if (!url) {
                url = getUrl();
            }
            var paramValue = this.getParameter(paramName, url);
            if (!paramValue && Ktag_Toggles.isSupportFloodlightTag()) {
                paramValue = this.getFloodlightParameter(paramName, url);
            }
            if (!paramValue) {
                return null;
            }
            return paramValue.split("#")[0];
        },

        getAmpLinkerParamsFromUrl: function() {
            var linkerString = this.readChannelClickIdFromUrl(Ktag_Constants.AMP_LINKER_PARAM_NAME);
            if (!linkerString) {
                return;
            }
            return amp_helper.parseLinker(linkerString);
        },

        getValidGclidFromUrl: function() {
            var channelClickId = this.readChannelClickIdFromUrl(Ktag_Constants.GOOGLE_CLICK_ID_PARAM_NAME);

            if (!this.isValidGclid(channelClickId)) {
                return;
            }
            return channelClickId;
        },

        getValidMsclkidFromUrl: function() {
            var channelClickId = this.readChannelClickIdFromUrl(Ktag_Constants.BING_CLICK_ID_PARAM_NAME);

            if (!this.isValidMsclkid(channelClickId)) {
                return;
            }
            return channelClickId;
        },

        getValidNpclidFromUrl: function() {
            var channelClickId = this.readChannelClickIdFromUrl(kenshooConstants.NO_PUBLISHER_CLICK_ID_PARAM_NAME);

            if (!this.isValidGclid(channelClickId) && !this.isValidMsclkid(channelClickId)) {
                return;
            }
            return channelClickId;
        },

        getValidGbraidFromUrl: function() {
            var gbraid = this.readChannelClickIdFromUrl(Ktag_Constants.GBRAID_NAME);

            if (!this.isValidGbraid(gbraid)) {
                return null;
            }
            return gbraid;
        },

        getValidWbraidFromUrl: function() {
            var wbraid = this.readChannelClickIdFromUrl(Ktag_Constants.WBRAID_NAME);

            if (!this.isValidWbraid(wbraid)) {
                return null;
            }
            return wbraid;
        },

        getValidKenPidFromUrl: function() {
            var kpid = this.readChannelClickIdFromUrl(Ktag_Constants.KPID_NAME);
            return kpid;
        },

        getFloodlightParameter: function(name, url) {
            var floodlightParams = decodeURIComponent(url).split(/[;&?]/);

            for (var i = 1; i < floodlightParams.length; i++) {
                var floodlightVal = floodlightParams[i].split("=");
                if (floodlightVal[0] === name) {
                    return floodlightVal[1];
                }
            }
            return null;
        },

        getUniversalChannelClickId: function(url) {
            if (!url) {
                url = getUrl();
            }
            var universalChannelClickId = this.getParameter(Ktag_Constants.UNIVERSAL_CHANNEL_PARAM_NAME, url);
            if (!universalChannelClickId) {
                return null;
            }
            return universalChannelClickId.split("#")[0];
        },

        storeUniversalChannelClickId: function() {
            var universalChannelClickId = this.getUniversalChannelClickId();
            if (universalChannelClickId && this.isValidKenshooId(universalChannelClickId)) {
                this.createSecondLevelDomainCookie(Ktag_Constants.UNIVERSAL_CHANNEL_COOKIE_NAME, universalChannelClickId, document.domain);
            }
        },

        createCookiesFromLinkerParameters: function(linkerParams) {
            if (!linkerParams) {
                return;
            }

            var ampChannelClickId = linkerParams.channelClickId;

            if (this.isValidGclid(ampChannelClickId) || this.isValidMsclkid(ampChannelClickId)) {
                this.createSecondLevelDomainCookie(Ktag_Constants.KENSHOO_GCLID_NAME, ampChannelClickId, document.domain);
                this.createSecondLevelDomainCookie(Ktag_Constants.AMP_CHANNEL_CLICK_ID_COOKIE_NAME, ampChannelClickId, document.domain);
            }
        },

        getCurrentDomain: function() {
            return document.domain;
        }
    };
}();
// eslint-disable-next-line no-implicit-globals
var setup = function() {
    Ktag_Helpers.storeChannelClickId();
};

try {
    (function(win) {
        var ktag = win.ktag;

        if (!ktag) {
            console.log("ktag undefined");
            return;
        }

        function flushQueue() {
            if (!ktag.ktq) return;
            while (ktag.ktq.length) {
                var event = ktag.ktq.shift();
                sendEvent(event);
            }
        }

        function sendEvent(event) {
            var eventName = event[0];
            switch (eventName) {
                case 'setup':
                    setup();
                    break;
                case 'event':
                    console.log("event " + event[1]);
                    break;
            }
        }
        ktag.sendEvent = sendEvent;
        flushQueue();
    })(window);
} catch (e) {
    console.log("Caught unexpected error: " + e);
}