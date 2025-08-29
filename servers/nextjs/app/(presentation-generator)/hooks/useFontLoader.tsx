
export const useFontLoader = ( fonts:string[]) => {
    const injectFonts = (fontUrls: string[]) => {
        const presentonServer = process.env.NEXT_PUBLIC_PRESENTON_SERVER || 'localhost';
        fontUrls.forEach((fontUrl) => {
          if (!fontUrl) return;
          let newFontUrl = fontUrl.includes('fonts.googleapis') ? fontUrl : `https://${presentonServer}:5000${fontUrl}`;
          const existingStyle = document.querySelector(`style[data-font-url="${newFontUrl}"]`);
          if (existingStyle) return;
          const style = document.createElement("style");
          style.setAttribute("data-font-url", newFontUrl);
          style.textContent = `@import url('${newFontUrl}');`;
          document.head.appendChild(style);
        });
      };
      injectFonts(fonts);
};