document.addEventListener("DOMContentLoaded", function() {
    var fav = document.querySelector("[rel='icon']");
    fav.href = "data:image/vnd.microsoft.icon;base64,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ZdFoZmX+aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aWdmngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpZ2bTaGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aWZl4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABqZmaRaGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2lpaSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrZ2dPaGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2lmZmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwcHAQaWdm/WhmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hnZaYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaWdlzGhmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2lnZucAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaWdmimhmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9tZ2cqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAamdnSGhmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9pZmZrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdHR0C2hmZvpoZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9pZ2atAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhnZcRoZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hm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Zf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9saGhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaGhoMWhmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmZ9aGdlpGlmZeVoZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9qZmaCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAAmhmZe1oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZ2XEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhnZa5oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmb6dHR0CwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGpoZmxoZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/amdnSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG1nZypoZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZmiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpZ2bnaGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGdmywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoZ2WmaGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aWdm/XBwcBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpZmZkaGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2tnZ08AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpaWkiaGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2pmZpEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaWZl4GhmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2lnZtMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaGdln2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf5pZmXRaWdmj2hoaEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaGhlXWhmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2lmZdlpZ2WXaWZmVXNmZhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcWhoG2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aWZl4GlnZp5pZ2dccWhoGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGlmZdloZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9pZ2bnaGdlpmlmZmRpaWkiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGlnZZdoZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZe1pZ2ataWZma21nZyoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGlmZlVoZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl8mhnZbVoZmZzaGhoMYCAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHNmZhRoZmX+aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX3aGdmvGlmZnprZ2c5gICABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpZmXRaGZl/2hmZf9oZmX/aGZl/2hmZf9oZmX/aGZl/2hmZvpoZ2XEamZmgmxoaEBtbW0HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoZ2eQaGZl/2hmZf9oZmX/aWdm/WhnZstoZmaJamdnSHR0dAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABqZ2dNaWdm02pmZpFrZ2dPcHBwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////wf8AAP////wB/wAA////wAH/AAD///wAAP8AAP//wAAA/wAA//4AAAD/AAD/4AAAAP8AAP4AAAAAfwAA4AAAAAB/AAAAAAAAAH8AAAAAAAAAfwAAAAAAAAA/AAAAAAAAAD8AAAAAAAAAPwAAgAAAAAA/AACAAAAAAB8AAIAAAAAAHwAAgAAAAAAfAADAAAAAAA8AAMAAAAAADwAAwAAAwAAPAADAAAfgAA8AAOAAD+AABwAA4AAP4AAHAADgAAfwAAcAAOAAB/AABwAA8AAH4AADAADwAAMAAAMAAPAAAAAAAwAA8AAAAAADAAD4AAAAAAEAAPgAAAAAAQAA+AAAAAABAAD8AAAAAAEAAPwAAAAAAAAA/AAAAAAAAAD8AAAAAAAAAP4AAAAAAAAA/gAAAAAAAAD+AAAAAAcAAP4AAAAAfwAA/wAAAAf/AAD/AAAAf/8AAP8AAAP//wAA/wAAP///AAD/gAP///8AAP+AP////wAA/4P/////AAA=";
});