import React from "react";

const Page = props => {
  const search = window.location.search;
  const params = new URLSearchParams(search);

  const foo = params.get("id");

  return (
    <div class="container mt-4">
      <h4>id is: {foo}</h4>
      <p>Try <a href="/page?id=123">/page?id=123</a> which should work</p>
      <p>Try <a href="/page/123">/page/123</a> which should does not work (<a href="https://gist.github.com/iwanether/c65e02e54f31f65cfa1a5440a7a98791" target="_blank">
                                                                           now.json</a>)</p>



    </div>
  );
};

export default Page;
