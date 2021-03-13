import React, { useState, useCallback } from "react";
import Select from "react-select";
import _ from "lodash";
export function AutoSelect({ ops, fetchTheData }) {
  const delayedQuery = useCallback(
    _.debounce((q) => fetchTheData(q), 500),
    []
  );
  return (
    <div>
      Auto Suggestion:{" "}
      <Select
        options={ops}
        onInputChange={(txt) => {
          delayedQuery(txt);
        }}
      />
    </div>
  );
}
