import type { NextPage } from "next";
import { Layout } from "../components/shared/Layout";
import { Button } from "../components/shared/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "../utils/util";
import Month from "../components/calender/Month";
import GlobalContext from "../components/context/GlobalContext";
import CalendarHeader from "../components/calender/CalendarHeader";
import Sidebar from "../components/calender/Sidebar";
import { useRecoilState, useRecoilValue } from "recoil";
import { monthIdxState, monthState } from "../atoms/month";
import EventModal from "../components/calender/EventModal";
import { openState } from "../atoms/modal";

const Home: NextPage = () => {
  const [authUser, authLoading, authError] = useAuthState(firebase.auth());
  const uid = authUser?.uid;
  const [user] = useDocumentData(
    uid && firebase.firestore().doc(`users/${uid}`)
  );
  const currentMonthIdx = useRecoilValue(monthIdxState);
  const [currenMonth, setCurrentMonth] = useRecoilState(monthState);
  // const { monthIndex, showEventModal } = useContext(GlobalContext);

  const showEventModal = useRecoilValue(openState);


  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx))
  }, [currentMonthIdx, setCurrentMonth]);

  const makeId = (date: Date, userId: string) => {
    if(!userId){
      userId = authUser.uid
    }
    var y = date.getFullYear()
    var m = ('00' + (date.getMonth() + 1)).slice(-2)
    var d = ('00' + date.getDate()).slice(-2)
    return `${y}${m}${d}${userId}`
  }

  return (
      <Layout
        left="icon"
        right={[
          <Button
            key="write memo"
            variant="solid-blue"
            linkProps={{ href: `/schedule/${uid}` }}
            className="px-4 h-10"
          >
            勤怠入力
          </Button>,
          "profile",
        ]}
      >
        {showEventModal && <EventModal />}
       <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
