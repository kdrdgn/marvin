function(){
	return function(text){
		function renderData(tag,data){
			dataKeys = tag.split('.');
			keyLength = dataKeys.length;
			for(var i = 0; i < keyLength; i++ ){
				anyVal = data[dataKeys[i]];
				switch (typeof(anyVal)) {
					case 'number':
						return anyVal;
					case 'string':
						return anyVal;
					case 'function':
						return anyVal.apply(data);
					case 'object':
						return renderData(dataKeys.slice(i+1).join("."),anyVal);
					default:
						break;
				}
			}
		}

		scannedTags = Hogan.parse(Hogan.scan(text));
		i18nData = {};
		i18nKey = '';

		for( i in scannedTags){
			i18nTag = scannedTags[ i ];
			switch (i18nTag.n) {
			case 'key':
				i18nKey = i18nTag.nodes[0].toString() // this code assumes string key tag's first node
				break;
			case 'count':
				i18nData.count = renderData( i18nTag.nodes[0],this ); // this code assumes string key represents to context object's avaiable keys
				break;
			case 'context':
				i18nData.context = i18nTag.nodes[0].toString()
				break;
			case 'values':
				nodesLength = i18nTag.nodes.length;
				for( var j = 0; j < nodesLength; j++ ){
					subnode = i18nTag.nodes[ j ];
					valkey = subnode.n.split('.');
					i18nData[ valkey[ valkey.length - 1 ] ] = subnode.otag + subnode.n + subnode.ctag;
				}
				break;
			default:
				return $.t(i18nTag);
			}
	
		}

		return $.t(i18nKey,i18nData);
	}
}
