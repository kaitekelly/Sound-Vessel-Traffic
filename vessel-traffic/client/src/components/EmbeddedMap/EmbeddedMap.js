const EmbeddedMap = (callback) => {
    const existingScript = document.getElementById('embeddedMap');
  
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "http://www.marinetraffic.com/js/embed.js";
      script.id = 'embeddedMap';
      document.body.appendChild(script);
  
      script.onload = () => {
        if (callback) callback();
      };
    }
  
    if (existingScript && callback) callback();
  };

  export default EmbeddedMap;