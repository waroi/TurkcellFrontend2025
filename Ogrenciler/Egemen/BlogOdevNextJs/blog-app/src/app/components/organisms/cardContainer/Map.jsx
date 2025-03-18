import React from "react";
import Card from "../../molecules/card/Card";

const Map = ({ blogs, loading = true, userAuth = false }) => {
  return (
    <div className="row">
      {blogs.length > 0 && loading ? (
        blogs?.map((blog) => (
          <div key={blog?.id} className="col-12">
            <Card userAuth={userAuth} key={blog?.id + "card"} card={blog} />
          </div>
        ))
      ) : (
        <p>Yükleniyor...</p>
      )}
    </div>
  );
};

export default Map;
