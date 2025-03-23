// awesome code ahead you're so cute please dont kill yourself haha
import { load } from "js-yaml";

// straight up stolen from stack overflow, fuck you
function getWebFile(url)
	{
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "GET", url, false ); // false for synchronous request
		xmlHttp.send( null );
		return xmlHttp.responseText;
	}

const raw = getWebFile("https://raw.githubusercontent.com/funky-station/funky-station/refs/heads/master/Resources/Prototypes/Recipes/Reactions/botany.yml")

const doc = load(raw);
console.log(doc)