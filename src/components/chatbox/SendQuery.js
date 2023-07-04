import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { queriesStateSliceActions } from "../../store/queriesStateSlice";

const SendQuery = () => {
  const dispatch = useDispatch();
  const [queryTextInput, setQueryTextInput] = useState("");

  const queryTextInputChangeHandler = (e) => {
    setQueryTextInput(e.target.value);
    console.log(queryTextInput);
  };

  const queryFormSubmitHandler = (e) => {
    e.preventDefault();
    sendRequest();
  };

  const sendRequest = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const requestBody = {
      queryId: Math.round(Math.random() * 1000),
      query: queryTextInput,
    };

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: { "Content-Type": "application/json" },
    });

    const responseData = await response.json();
    const queryAndResponse = {
      [responseData.queryId]: {
        query: requestBody.query,
        response: responseData.query,
      },
    };
    console.log(queryAndResponse);
    dispatch(queriesStateSliceActions.addQuery({ ...queryAndResponse }));

    setTimeout(() => {
      console.log(responseData);
    }, 1000);
  };

  return (
    <form onSubmit={queryFormSubmitHandler}>
      <input
        type="text"
        name="message"
        value={queryTextInput}
        placeholder="type your question here"
        onChange={queryTextInputChangeHandler}
      />
      <button type="submit">Ask</button>
    </form>
  );
};

export default SendQuery;
