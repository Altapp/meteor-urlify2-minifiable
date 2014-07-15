var LATIN_MAP = {
    // 'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE', 'Ç':
    // 'C', 'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I', 'Î': 'I',
    // 'Ï': 'I', 'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö':
    // 'O', 'Ő': 'O', 'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U', 'Ű': 'U',
    // 'Ý': 'Y', 'Þ': 'TH', 'ß': 'ss', 'à':'a', 'á':'a', 'â': 'a', 'ã': 'a', 'ä':
    // 'a', 'å': 'a', 'æ': 'ae', 'ç': 'c', 'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
    // 'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i', 'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó':
    // 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ő': 'o', 'ø': 'o', 'ù': 'u', 'ú': 'u',
    // 'û': 'u', 'ü': 'u', 'ű': 'u', 'ý': 'y', 'þ': 'th', 'ÿ': 'y'
    '\u00C0': 'A', '\u00C1': 'A', '\u00C2': 'A', '\u00C3': 'A', '\u00C4': 'A', '\u00C5': 'A', '\u00C6': 'AE', 
    '\u00C7': 'C', '\u00C8': 'E', '\u00C9': 'E', '\u00CA': 'E', '\u00CB': 'E', '\u00CC': 'I', '\u00CD': 'I', 
    '\u00CE': 'I', '\u00CF': 'I', '\u00D0': 'D', '\u00D1': 'N', '\u00D2': 'O', '\u00D3': 'O', '\u00D4': 'O', 
    '\u00D5': 'O', '\u00D6': 'O', '\u0150': 'O', '\u00D8': 'O', '\u00D9': 'U', '\u00DA': 'U', '\u00DB': 'U', 
    '\u00DC': 'U', '\u0170': 'U', '\u00DD': 'Y', '\u00DE': 'TH', '\u00DF': 'ss', '\u00E0': 'a', '\u00E1': 'a', 
    '\u00E2': 'a', '\u00E3': 'a', '\u00E4': 'a', '\u00E5': 'a', '\u00E6': 'ae', '\u00E7': 'c', '\u00E8': 'e', 
    '\u00E9': 'e', '\u00EA': 'e', '\u00EB': 'e', '\u00EC': 'i', '\u00ED': 'i', '\u00EE': 'i', '\u00EF': 'i', 
    '\u00F0': 'd', '\u00F1': 'n', '\u00F2': 'o', '\u00F3': 'o', '\u00F4': 'o', '\u00F5': 'o', '\u00F6': 'o', 
    '\u0151': 'o', '\u00F8': 'o', '\u00F9': 'u', '\u00FA': 'u', '\u00FB': 'u', '\u00FC': 'u', '\u0171': 'u', 
    '\u00FD': 'y', '\u00FE': 'th', '\u00FF': 'y'
}
var LATIN_SYMBOLS_MAP = {
    // '©':'(c)'
    '\u00A9':'(c)'
}
var GREEK_MAP = {
    // 'α':'a', 'β':'b', 'γ':'g', 'δ':'d', 'ε':'e', 'ζ':'z', 'η':'h', 'θ':'8',
    // 'ι':'i', 'κ':'k', 'λ':'l', 'μ':'m', 'ν':'n', 'ξ':'3', 'ο':'o', 'π':'p',
    // 'ρ':'r', 'σ':'s', 'τ':'t', 'υ':'y', 'φ':'f', 'χ':'x', 'ψ':'ps', 'ω':'w',
    // 'ά':'a', 'έ':'e', 'ί':'i', 'ό':'o', 'ύ':'y', 'ή':'h', 'ώ':'w', 'ς':'s',
    // 'ϊ':'i', 'ΰ':'y', 'ϋ':'y', 'ΐ':'i',
    // 'Α':'A', 'Β':'B', 'Γ':'G', 'Δ':'D', 'Ε':'E', 'Ζ':'Z', 'Η':'H', 'Θ':'8',
    // 'Ι':'I', 'Κ':'K', 'Λ':'L', 'Μ':'M', 'Ν':'N', 'Ξ':'3', 'Ο':'O', 'Π':'P',
    // 'Ρ':'R', 'Σ':'S', 'Τ':'T', 'Υ':'Y', 'Φ':'F', 'Χ':'X', 'Ψ':'PS', 'Ω':'W',
    // 'Ά':'A', 'Έ':'E', 'Ί':'I', 'Ό':'O', 'Ύ':'Y', 'Ή':'H', 'Ώ':'W', 'Ϊ':'I',
    // 'Ϋ':'Y'
    '\u03B1':'a', '\u03B2':'b', '\u03B3':'g', '\u03B4':'d', '\u03B5':'e', '\u03B6':'z', '\u03B7':'h', '\u03B8':'8', 
    '\u03B9':'i', '\u03BA':'k', '\u03BB':'l', '\u03BC':'m', '\u03BD':'n', '\u03BE':'3', '\u03BF':'o', '\u03C0':'p', 
    '\u03C1':'r', '\u03C3':'s', '\u03C4':'t', '\u03C5':'y', '\u03C6':'f', '\u03C7':'x', '\u03C8':'ps', '\u03C9':'w', 
    '\u03AC':'a', '\u03AD':'e', '\u03AF':'i', '\u03CC':'o', '\u03CD':'y', '\u03AE':'h', '\u03CE':'w', '\u03C2':'s', 
    '\u03CA':'i', '\u03B0':'y', '\u03CB':'y', '\u0390':'i', 
    '\u0391':'A', '\u0392':'B', '\u0393':'G', '\u0394':'D', '\u0395':'E', '\u0396':'Z', '\u0397':'H', '\u0398':'8', 
    '\u0399':'I', '\u039A':'K', '\u039B':'L', '\u039C':'M', '\u039D':'N', '\u039E':'3', '\u039F':'O', '\u03A0':'P', 
    '\u03A1':'R', '\u03A3':'S', '\u03A4':'T', '\u03A5':'Y', '\u03A6':'F', '\u03A7':'X', '\u03A8':'PS', '\u03A9':'W', 
    '\u0386':'A', '\u0388':'E', '\u038A':'I', '\u038C':'O', '\u038E':'Y', '\u0389':'H', '\u038F':'W', '\u03AA':'I', 
    '\u03AB':'Y'

}
var TURKISH_MAP = {
    // 'ş':'s', 'Ş':'S', 'ı':'i', 'İ':'I', 'ç':'c', 'Ç':'C', 'ü':'u', 'Ü':'U',
    // 'ö':'o', 'Ö':'O', 'ğ':'g', 'Ğ':'G'
    '\u015F':'s', '\u015E':'S', '\u0131':'i', '\u0130':'I', '\u00E7':'c', '\u00C7':'C', '\u00FC':'u', '\u00DC':'U', 
    '\u00F6':'o', '\u00D6':'O', '\u011F':'g', '\u011E':'G'
}
var RUSSIAN_MAP = {
    // 'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'yo', 'ж':'zh',
    // 'з':'z', 'и':'i', 'й':'j', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o',
    // 'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'х':'h', 'ц':'c',
    // 'ч':'ch', 'ш':'sh', 'щ':'sh', 'ъ':'', 'ы':'y', 'ь':'', 'э':'e', 'ю':'yu',
    // 'я':'ya',
    // 'А':'A', 'Б':'B', 'В':'V', 'Г':'G', 'Д':'D', 'Е':'E', 'Ё':'Yo', 'Ж':'Zh',
    // 'З':'Z', 'И':'I', 'Й':'J', 'К':'K', 'Л':'L', 'М':'M', 'Н':'N', 'О':'O',
    // 'П':'P', 'Р':'R', 'С':'S', 'Т':'T', 'У':'U', 'Ф':'F', 'Х':'H', 'Ц':'C',
    // 'Ч':'Ch', 'Ш':'Sh', 'Щ':'Sh', 'Ъ':'', 'Ы':'Y', 'Ь':'', 'Э':'E', 'Ю':'Yu',
    // 'Я':'Ya'
    '\u0430':'a', '\u0431':'b', '\u0432':'v', '\u0433':'g', '\u0434':'d', '\u0435':'e', '\u0451':'yo', '\u0436':'zh', 
    '\u0437':'z', '\u0438':'i', '\u0439':'j', '\u043A':'k', '\u043B':'l', '\u043C':'m', '\u043D':'n', '\u043E':'o', 
    '\u043F':'p', '\u0440':'r', '\u0441':'s', '\u0442':'t', '\u0443':'u', '\u0444':'f', '\u0445':'h', '\u0446':'c', 
    '\u0447':'ch', '\u0448':'sh', '\u0449':'sh', '\u044A':'', '\u044B':'y', '\u044C':'', '\u044D':'e', '\u044E':'yu', 
    '\u044F':'ya', 
    '\u0410':'A', '\u0411':'B', '\u0412':'V', '\u0413':'G', '\u0414':'D', '\u0415':'E', '\u0401':'Yo', '\u0416':'Zh', 
    '\u0417':'Z', '\u0418':'I', '\u0419':'J', '\u041A':'K', '\u041B':'L', '\u041C':'M', '\u041D':'N', '\u041E':'O', 
    '\u041F':'P', '\u0420':'R', '\u0421':'S', '\u0422':'T', '\u0423':'U', '\u0424':'F', '\u0425':'H', '\u0426':'C', 
    '\u0427':'Ch', '\u0428':'Sh', '\u0429':'Sh', '\u042A':'', '\u042B':'Y', '\u042C':'', '\u042D':'E', '\u042E':'Yu', 
    '\u042F':'Ya'
}
var UKRAINIAN_MAP = {
    // 'Є':'Ye', 'І':'I', 'Ї':'Yi', 'Ґ':'G', 'є':'ye', 'і':'i', 'ї':'yi', 'ґ':'g'
    '\u0404':'Ye', '\u0406':'I', '\u0407':'Yi', '\u0490':'G', '\u0454':'ye', '\u0456':'i', '\u0457':'yi', '\u0491':'g'
}
var CZECH_MAP = {
    // 'č':'c', 'ď':'d', 'ě':'e', 'ň': 'n', 'ř':'r', 'š':'s', 'ť':'t', 'ů':'u',
    // 'ž':'z', 'Č':'C', 'Ď':'D', 'Ě':'E', 'Ň': 'N', 'Ř':'R', 'Š':'S', 'Ť':'T',
    // 'Ů':'U', 'Ž':'Z'
    '\u010D':'c', '\u010F':'d', '\u011B':'e', '\u0148': 'n', '\u0159':'r', '\u0161':'s', '\u0165':'t', '\u016F':'u', 
    '\u017E':'z', '\u010C':'C', '\u010E':'D', '\u011A':'E', '\u0147': 'N', '\u0158':'R', '\u0160':'S', '\u0164':'T', 
    '\u016E':'U', '\u017D':'Z'
}
var POLISH_MAP = {
    // 'ą':'a', 'ć':'c', 'ę':'e', 'ł':'l', 'ń':'n', 'ó':'o', 'ś':'s', 'ź':'z',
    // 'ż':'z', 'Ą':'A', 'Ć':'C', 'Ę':'e', 'Ł':'L', 'Ń':'N', 'Ó':'o', 'Ś':'S',
    // 'Ź':'Z', 'Ż':'Z'
    '\u0105':'a', '\u0107':'c', '\u0119':'e', '\u0142':'l', '\u0144':'n', '\u00F3':'o', '\u015B':'s', '\u017A':'z', 
    '\u017C':'z', '\u0104':'A', '\u0106':'C', '\u0118':'e', '\u0141':'L', '\u0143':'N', '\u00D3':'o', '\u015A':'S', 
    '\u0179':'Z', '\u017B':'Z'
}
var LATVIAN_MAP = {
    // 'ā':'a', 'č':'c', 'ē':'e', 'ģ':'g', 'ī':'i', 'ķ':'k', 'ļ':'l', 'ņ':'n',
    // 'š':'s', 'ū':'u', 'ž':'z', 'Ā':'A', 'Č':'C', 'Ē':'E', 'Ģ':'G', 'Ī':'i',
    // 'Ķ':'k', 'Ļ':'L', 'Ņ':'N', 'Š':'S', 'Ū':'u', 'Ž':'Z'
    '\u0101':'a', '\u010D':'c', '\u0113':'e', '\u0123':'g', '\u012B':'i', '\u0137':'k', '\u013C':'l', '\u0146':'n', 
    '\u0161':'s', '\u016B':'u', '\u017E':'z', '\u0100':'A', '\u010C':'C', '\u0112':'E', '\u0122':'G', '\u012A':'i', 
    '\u0136':'k', '\u013B':'L', '\u0145':'N', '\u0160':'S', '\u016A':'u', '\u017D':'Z'
}

var ALL_DOWNCODE_MAPS=new Array()
ALL_DOWNCODE_MAPS[0]=LATIN_MAP
ALL_DOWNCODE_MAPS[1]=LATIN_SYMBOLS_MAP
ALL_DOWNCODE_MAPS[2]=GREEK_MAP
ALL_DOWNCODE_MAPS[3]=TURKISH_MAP
ALL_DOWNCODE_MAPS[4]=RUSSIAN_MAP
ALL_DOWNCODE_MAPS[5]=UKRAINIAN_MAP
ALL_DOWNCODE_MAPS[6]=CZECH_MAP
ALL_DOWNCODE_MAPS[7]=POLISH_MAP
ALL_DOWNCODE_MAPS[8]=LATVIAN_MAP

var Downcoder = new Object();
Downcoder.Initialize = function()
{
    if (Downcoder.map) // already made
        return ;
    Downcoder.map ={}
    Downcoder.chars = '' ;
    for(var i in ALL_DOWNCODE_MAPS)
    {
        var lookup = ALL_DOWNCODE_MAPS[i]
        for (var c in lookup)
        {
            Downcoder.map[c] = lookup[c] ;
            Downcoder.chars += c ;
        }
    }
    Downcoder.regex = new RegExp('[' + Downcoder.chars + ']|[^' + Downcoder.chars + ']+','g') ;
}

downcode= function( slug )
{
    Downcoder.Initialize() ;
    var downcoded =""
    var pieces = slug.match(Downcoder.regex);
    if(pieces)
    {
        for (var i = 0 ; i < pieces.length ; i++)
        {
            if (pieces[i].length == 1)
            {
                var mapped = Downcoder.map[pieces[i]] ;
                if (mapped != null)
                {
                    downcoded+=mapped;
                    continue ;
                }
            }
            downcoded+=pieces[i];
        }
    }
    else
    {
        downcoded = slug;
    }
    return downcoded;
}


function URLify(s, num_chars) {
    // changes, e.g., "Petty theft" to "petty_theft"
    // remove all these words from the string before urlifying
    s = downcode(s);
    removelist = ["a", "an", "as", "at", "before", "but", "by", "for", "from",
                  "is", "in", "into", "like", "of", "off", "on", "onto", "per",
                  "since", "than", "the", "this", "that", "to", "up", "via",
                  "with"];
    r = new RegExp('\\b(' + removelist.join('|') + ')\\b', 'gi');
    s = s.replace(r, '');
    // if downcode doesn't hit, the char will be stripped here
    s = s.replace(/[^-\w\s]/g, '');  // remove unneeded chars
    s = s.replace(/^\s+|\s+$/g, ''); // trim leading/trailing spaces
    s = s.replace(/[-\s]+/g, '-');   // convert spaces to hyphens
    s = s.toLowerCase();             // convert to lowercase
    return s.substring(0, num_chars);// trim to first num_chars chars
}

// Added for Meteor
URLify2.downcode = downcode;
URLify2.ALL_DOWNCODE_MAPS = ALL_DOWNCODE_MAPS;

