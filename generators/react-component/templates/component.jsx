import React from "react";

import styles from "./<%= name %>.module.scss";

export function <%= name %>() {
  return (
    <div className={styles.<%= className %>}>
      <%= name %> works!
    </div>
  );
}
