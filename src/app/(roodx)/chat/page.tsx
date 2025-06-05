'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Search, MoreVertical, Phone, Video, Info, Plus, Paperclip, Users, Bell, MessageCircle, Menu } from 'lucide-react';

const users = [
  {
    id: 1,
    name: 'Felecia Rower',
    message: 'If it takes long you ...',
    time: '10 AM',
    avatar: '/images/user1.png',
    unread: true,
  },
  {
    id: 2,
    name: 'Adalberto Grand',
    message: 'I will purchase it fo...',
    time: '10 AM',
    avatar: '/images/user2.png',
    unread: false,
  },
  {
    id: 3,
    name: 'Joaquina Weiser',
    message: 'Soufflé soufflé car...',
    time: '10 AM',
    avatar: '/images/user3.png',
    unread: false,
  },
  {
    id: 4,
    name: 'Verla Morgano',
    message: 'Chupa chups cand...',
    time: '10 AM',
    avatar: '/images/user4.png',
    unread: false,
  },
  {
    id: 5,
    name: 'Margot Henschke',
    message: 'Cake pie jelly jelly ...',
    time: '10 AM',
    avatar: '/images/user5.png',
    unread: false,
  },
  {
    id: 6,
    name: 'Sal Piggee',
    message: 'Toffee caramels jel...',
    time: '10 AM',
    avatar: '/images/user6.png',
    unread: false,
  },
  {
    id: 7,
    name: 'Miguel Guelff',
    message: 'Biscuit powder oat...',
    time: '10 AM',
    avatar: '/images/user7.png',
    unread: false,
  },
  {
    id: 8,
    name: 'Mauro Elenbaas',
    message: 'Bear claw ice crea...',
    time: '10 AM',
    avatar: '/images/user8.png',
    unread: false,
  },
  {
    id: 9,
    name: 'Bridgett Omohundro',
    message: 'Gummies gummi be...',
    time: '10 AM',
    avatar: '/images/user9.png',
    unread: false,
  },
  {
    id: 10,
    name: 'Zenia Jacobs',
    message: '',
    time: '10 AM',
    avatar: '/images/user10.png',
    unread: false,
  },
];

type Message = {
  id: number;
  fromMe: boolean;
  text: string;
  time: string;
};

const initialChatState: Record<number, Message[]> = {
  1: [
    { id: 1, fromMe: false, text: 'Hello. How can I help You?', time: '01:15 PM' },
    { id: 2, fromMe: true, text: 'Hi', time: '01:15 PM' },
    { id: 3, fromMe: true, text: 'Can I get details of my last transaction I made last month?', time: '01:16 PM' },
    { id: 4, fromMe: false, text: 'We need to check if we can provide you such information.', time: '01:15 PM' },
    { id: 5, fromMe: false, text: 'I will inform you as I get update on this.', time: '01:16 PM' },
    { id: 6, fromMe: true, text: 'If it takes long you can mail me at my mail address.', time: '01:06 PM' },
  ],
  2: [
    { id: 1, fromMe: false, text: 'Hi, how can I help you?', time: '09:00 AM' },
    { id: 2, fromMe: true, text: 'I will purchase it for sure!', time: '09:01 AM' },
  ],
};
users.forEach(user => {
  if (!initialChatState[user.id]) initialChatState[user.id] = [];
});

export default function Chat() {
  const [activeUser, setActiveUser] = useState(users[0]);
  const [chats, setChats] = useState<Record<number, Message[]>>(initialChatState);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats, activeUser]);

  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));

  const handleSend = () => {
    if (input.trim()) {
      const msg: Message = {
        id: (chats[activeUser.id]?.length || 0) + 1,
        text: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        fromMe: true,
      };
      setChats(prev => ({
        ...prev,
        [activeUser.id]: [...(prev[activeUser.id] || []), msg],
      }));
      setInput('');
    }
  };

  const activeMessages = chats[activeUser.id] || [];

  return (
    <div className="flex  bg-[#f7f9fb]">
      {/* Hamburger for mobile to lg */}
      <button
        className="xl:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-lg border border-gray-200"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu className="size-6 text-[#8b5cf6]" />
      </button>
      {/* Sidebar (drawer on mobile, tablet, lg; static on xl+) */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-72 max-w-full bg-white border-r border-[#e5e7eb] flex flex-col transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          xl:static xl:translate-x-0 xl:w-[320px] xl:min-w-[260px] xl:max-w-[340px] xl:z-0
        `}
      >
        {/* Close button for mobile to lg */}
        <div className="xl:hidden flex justify-end p-2">
          <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar" className="p-2 rounded-full hover:bg-gray-100">
            <svg className="size-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        {/* Sidebar Header */}
        <div className="flex items-center gap-3 p-4 border-b border-[#e5e7eb]">
          <Avatar>
            <AvatarImage src="/images/user1.png" alt="Mr. Bean" />
            <AvatarFallback>MB</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-semibold text-[#222]">Mr. Bean <span className="text-xs text-green-500 ml-1">●</span></div>
            <div className="text-xs text-gray-400">UX/UI Designer</div>
          </div>
          <Button variant="ghost" size="icon"><MoreVertical className="size-5 text-gray-400" /></Button>
        </div>
        {/* Search & Tabs */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e5e7eb]">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full rounded-md bg-[#f3f4f6] px-3 py-2 text-sm text-gray-700 border border-[#e5e7eb] focus:outline-none"
            />
            <Search className="absolute right-2 top-2.5 size-4 text-gray-400" />
          </div>
        </div>
        <div className="flex gap-2 w-[90%] justify-between py-8 border-b border-[#e5e7eb]">
          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col items-center justify-center gap-1 text-[#377dff]"
          >
            <MessageCircle className="size-6" />
            <span className="text-xs font-semibold">Chats</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col items-center justify-center gap-1 text-gray-400"
          >
            <Users className="size-6" />
            <span className="text-xs">Groups</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col items-center justify-center gap-1 text-gray-400"
          >
            <Bell className="size-6" />
            <span className="text-xs">Notification</span>
          </Button>
        </div>
        {/* User List */}
        <div className="flex-1 ">
          {filteredUsers.map(user => (
            <div
              key={user.id}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#f3f4f6] ${activeUser.id === user.id ? 'bg-[#f3f4f6]' : ''}`}
              onClick={() => setActiveUser(user)}
            >
              <div className="relative">
                <Avatar>
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                {activeUser.id === user.id && (
                  <span className="absolute bottom-0 right-0 block w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm text-[#222] truncate">{user.name}</div>
                <div className="text-xs text-gray-400 truncate">{user.message}</div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs text-gray-400">{user.time}</span>
                {user.unread && <span className="w-2 h-2 rounded-full bg-[#377dff] block" />}
              </div>
            </div>
          ))}
        </div>
      </aside>
      {/* Overlay for mobile to lg sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 xl:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Chat Area */}
      <main className="flex-1 flex flex-col bg-[#f7f9fb] px-2 sm:px-4 md:px-8 transition-all duration-300">
        {/* Chat Header */}
        <div className="flex items-center justify-between px-2 sm:px-4 md:px-0 py-4 border-b border-[#e5e7eb] bg-white">
          <div className="flex items-center gap-3">
            {/* Hamburger for mobile to lg */}
            <button
              className="xl:hidden mr-1 p-1"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu className="size-6 text-[#444]" />
            </button>
            <div className="relative">
              <Avatar className="ring-2 ring-[#f0f] ring-offset-2">
                <AvatarImage src={activeUser.avatar} alt={activeUser.name} />
                <AvatarFallback>{activeUser.name[0]}</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 right-0 block w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>
            </div>
            {/* Username and status for lg+ */}
            <div className="hidden lg:block ml-2">
              <div className="font-semibold text-[#222]">{activeUser.name}</div>
              <div className="text-xs text-green-500">Active Now</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon"><Phone className="size-5 text-[#8b5cf6]" /></Button>
            <Button variant="ghost" size="icon"><Video className="size-5 text-[#8b5cf6]" /></Button>
            <Button variant="ghost" size="icon"><Info className="size-5 text-[#8b5cf6]" /></Button>
          </div>
        </div>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-0 py-4 sm:py-6 flex flex-col gap-4">
          {activeMessages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
              <svg width="64" height="64" fill="none" className="mx-auto mb-4" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#F3F4F6"/><ellipse cx="32" cy="32" rx="16" ry="12" fill="#E5E7EB"/><circle cx="24" cy="30" r="2" fill="#D1D5DB"/><circle cx="32" cy="30" r="2" fill="#D1D5DB"/><circle cx="40" cy="30" r="2" fill="#D1D5DB"/></svg>
              <div className="text-lg font-semibold">No message yet...</div>
              <div className="text-sm">don&apos;t worry, just take a deep breath &amp; say &quot;Hello&quot;</div>
            </div>
          ) : (
            <>
              {activeMessages.map(msg => (
                <div key={msg.id} className={`flex ${msg.fromMe ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[60%] px-4 py-2 rounded-2xl text-sm ${msg.fromMe ? 'bg-[#e6e6fa] text-[#6c63ff] self-end' : 'bg-[#e6f0fa] text-[#222] self-start'}`}>
                    {msg.text}
                    <div className="text-[11px] text-gray-400 mt-1 text-right">{msg.time}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
        {/* Input */}
        <form
          className="flex items-center gap-2 px-0 py-4 border-t border-[#e5e7eb] bg-white"
          onSubmit={e => { e.preventDefault(); handleSend(); }}
        >
          {/* Left icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" type="button" className="text-[#8b5cf6]">
              <Plus className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" type="button" className=" text-[#8b5cf6]">
              <Paperclip className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" type="button" className=" text-[#8b5cf6]">
              <span role="img" aria-label="sticker" className="text-xl">🌟</span>
            </Button>
          </div>
          {/* Input */}
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-1  border-4  border-gray-100 rounded-2xl text-gray-700 placeholder:text-gray-400 text-base px-4 py-2"
          />
          {/* Right icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" type="button" className="bg-[#f3f4f6] text-[#8b5cf6]">
              <span role="img" aria-label="emoji" className="text-xl">😊</span>
            </Button>
            <Button type="submit" variant="ghost" size="icon" className="bg-[#f3f4f6] text-[#8b5cf6]">
              <svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
