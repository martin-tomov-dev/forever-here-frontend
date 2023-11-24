import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import AdminHeader from "../../components/AdminHeader";
import Footer from "../../components/Footer";
import MemoryForm from "../../components/MemoryForm";
import PriceCard from "../../components/PriceCard/PriceCard";
import ForeverMessageForm from "../../components/ForeverMessageForm/ForeverMessageForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userService } from "../../services/userService";

const Root = styled("div")(({ theme }) => ({}));

function ForeverMessageViewPage() {
  const [messageData, setMessageData] = useState({});
  const { id } = useParams();
  const [sender, setSender] = useState("");
  const [subject, setSubject] = useState("Subject");
  const [receiver, setReceiver] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [attachment, setAttachment] = useState("");

  const getMessage = async (id) => {
    const { data } = await userService.getMessageById(id);
    setSubject(data.subject);
    setSender(data.email);
    setReceiver(data.receiver);
    setMessageContent(data.Message);
    setAttachment(data.attachment);
    console.log("______data", data);
  };

  useEffect(() => {
    console.log("___________id", id);
    getMessage(id);
  }, []);

  return (
    <Root>
      <AdminHeader headerBackground="/assets/images/apps/home/about-us-banner.png" />
      <ForeverMessageForm
        message={{ subject, sender, receiver, messageContent, attachment }}
      />
      <Footer />
    </Root>
  );
}

export default ForeverMessageViewPage;
