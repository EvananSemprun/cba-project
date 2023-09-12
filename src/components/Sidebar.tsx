import { ReactNode, useEffect, useState } from "react"
import { Navbar, Text } from "@mantine/core"
import actionCable from 'actioncable'

interface ILinks {
  name: string;
  url: string;
  icon?: ReactNode;
  notifications?: number
  pin: boolean
}

const isVisible = () => {
  const hiddenRoutes = ['/login']

  return hiddenRoutes.includes(window.location.pathname)
}

function Sidebar() {
  const [channel, setChannel] = useState<null | actionCable.Channel>(null);
  const cableApp = actionCable.createConsumer('ws://localhost:3000/cable');

  useEffect(() => {
    if (null !== channel) channel.unsubscribe();

    setChannel(
      cableApp.subscriptions.create(
        {
          channel: 'SidebarChannel',
          access_token: localStorage.getItem('token')
        },
        {
          received: (message: ILinks[]) => {
            console.log("Yeeey :D")
            console.log(message);
          },
          
        },
      ),
    );
  }, []);

  return (
    <Navbar 
      width={{ base: 230 }} 
      withBorder={false} 
      height="100%" 
      bg="#1e2541" 
      p="xs"
      hidden={isVisible()}
    >
    </Navbar>
  )
}

export default Sidebar
