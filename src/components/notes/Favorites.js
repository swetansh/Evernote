import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import NoteList from "./NoteList";

const Favorites = () => {
  useFirestoreConnect([
    {
      collection: "notes",
      where: ["favorite", "==", true],
      orderBy: ["createdAt", "desc"],
      storeAs:'favNotes'
    },
  ]);
  const favnotes = useSelector((state) => state.firestore.ordered.favNotes);
  //always use optional chaining while parsing long objects
  console.log(favnotes);

  return <NoteList notes={favnotes}/>;
};

export default Favorites;
