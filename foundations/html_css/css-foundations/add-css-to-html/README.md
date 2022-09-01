# Adding CSS to HTML

1. External CSS (most common): creating a separate file for the CSS and linking it inside of an HTML’s opening and closing <head> tags with a self-closing <link> element.
    1. It keeps our HTML and CSS separated, which results in the HTML file being smaller and making things look cleaner.
    2. We only need to edit the CSS in one place, which is especially handy for websites with many pages that all share similar styles.

2. Internal CSS: involves adding the CSS within the HTML file itself instead of creating a completely separate file. With the internal method, you place all the rules inside of a pair of opening and closing <style> tags, which are then placed inside of the opening and closing <head> tags of your HTML file

3. Inline CSS: Inline CSS makes it possible to add styles directly to HTML elements, though this method isn’t as recommended:
    1. It can get pretty messy pretty quickly once you start adding a lot of declarations to a single element, causing your HTML file to become unnecessarily bloated.
    2. If you want many elements to have the same style, you would have to copy + paste the same style to each individual element, causing lots of unnecessary repetition and more bloat.
    3. Any inline CSS will override the other two methods, which can cause unexpected results.