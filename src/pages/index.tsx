/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { Layout } from "../components/shared/Layout";
import { Button } from "../components/shared/Button";
import { AuthProvider } from "../auth/AuthProvider";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


const Home: NextPage = () => {
  const [authUser, authLoading, authError] = useAuthState(firebase.auth());
  const uid = authUser?.uid;
  const [user] = useDocumentData(
    uid && firebase.firestore().doc(`users/${uid}`)
  );

  const makeId = (date: Date, userId: string) => {
    if(!userId){
      userId = authUser.uid
    }
    var y = date.getFullYear()
    var m = ('00' + (date.getMonth() + 1)).slice(-2)
    var d = ('00' + date.getDate()).slice(-2)
    console.log(`年：${y}`)
    console.log(`月：${m}`)
    console.log(`日：${d}`)
    return `${y}${m}${d}${userId}`
  }
  
  return (
    <AuthProvider>
      <Layout
        left="icon"
        right={[
          <Button
            key="write memo"
            variant="solid-blue"
            linkProps={{ href: "/memos/new" }}
            className="px-4 h-10"
          >
            勤怠入力
          </Button>,
          "profile",
        ]}
      >
        <div className="p-10 bg-gray-100">
          <div className="rounded-xl max-w-5xl overflow-hidden shadow-lg bg-gray-50 py-5">
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-2">
                🦔 Hello ! {user?.name}さん
              </div>
              <p className="text-gray-700 text-base">今月の勤務予定時間合計：20時間</p>
            </div>
          </div>
          <FullCalendar
          plugins={[dayGridPlugin]}
          locale="ja"
          initialEvents={[{ title: 'initial event', start: new Date() }]}
          />
        </div>
      </Layout>
    </AuthProvider>
  );
};

export default Home;
