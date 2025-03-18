import axios from "axios";
import { useState, useEffect, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MessageContext } from "../../services/MessageContext";
import styled from "styled-components";
import { FaEdit, FaTrash, FaSave, FaTimes, FaBell } from "react-icons/fa";

// Styled Components
const PageWrapper = styled.div`
  padding: 40px;
  background: linear-gradient(135deg, #6c63ff, #1e1e1e);
  min-height: 100vh;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const NotificationButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #6c63ff;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 30px auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

const CompanyName = styled.h2`
  color: #6c63ff;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Info = styled.p`
  font-size: 1rem;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: 0.3s;
  &:focus {
    border: 1px solid #6c63ff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  width: 100px;
  transition: 0.3s;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  ${({ variant }) =>
    variant === "primary"
      ? "background: #6c63ff; &:hover { background: #574bff; }"
      : variant === "danger"
      ? "background: #ff4d4d; &:hover { background: #d63333; }"
      : "background: #28a745; &:hover { background: #218838; }"}
`;

const UserProfile = () => {
  const [userData, setUserData] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isHidden, setIsHidden] = useState(false);
  const { msg } = useContext(MessageContext);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios
      .get("https://localhost:7279/api/Application")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const openUpdateForm = (user) => {
    setEditUserId(user.id);
    setFormData({ name: user.name, email: user.email, phone: user.phone });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editUserId) return;

    const existingUser = userData.find((user) => user.id === editUserId);
    if (!existingUser) return toast.error("User not found!");

    const updatedData = { ...formData, companyName: existingUser.companyName };

    try {
      await axios.put(
        `https://localhost:7279/api/Application/${editUserId}`,
        updatedData,
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success("Details Updated Successfully!");
      setUserData((prevData) =>
        prevData.map((user) =>
          user.id === editUserId ? { ...user, ...updatedData } : user
        )
      );
      setEditUserId(null);
    } catch (error) {
      toast.error("Update failed!");
      console.error("Error updating details:", error);
    }
  };

  const handleWithdraw = (id) => {
    if (window.confirm("Are you sure you want to withdraw this application?")) {
      axios
        .delete(`https://localhost:7279/api/Application/${id}`)
        .then(() => {
          toast.success("Application Withdrawn!");
          setUserData((prevData) => prevData.filter((user) => user.id !== id));
        })
        .catch((error) => console.error("Error deleting application:", error));
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <PageWrapper>
        <Navbar>
          <h3>Job Tracker</h3>
          <NotificationButton onClick={() => setIsHidden(!isHidden)}>
            <FaBell /> {isHidden ? "Hidden" : `Notifications ${msg}`}
          </NotificationButton>
        </Navbar>

        <Container>
          <Title>APPLIED COMPANIES</Title>
          <Grid>
            {userData.map((user) => (
              <Card key={user.id}>
                {editUserId === user.id ? (
                  <form onSubmit={handleUpdate}>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <ButtonGroup>
                      <Button variant="success" type="submit">
                        <FaSave /> Save
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => setEditUserId(null)}
                      >
                        <FaTimes /> Cancel
                      </Button>
                    </ButtonGroup>
                  </form>
                ) : (
                  <>
                    <CompanyName>{user.companyName}</CompanyName>
                    <Info>
                      <strong>Name:</strong> {user.name}
                    </Info>
                    <Info>
                      <strong>Email:</strong> {user.email}
                    </Info>
                    <Info>
                      <strong>Phone:</strong> {user.phone}
                    </Info>
                    <ButtonGroup>
                      <Button
                        variant="primary"
                        onClick={() => openUpdateForm(user)}
                      >
                        <FaEdit /> Update
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleWithdraw(user.id)}
                      >
                        <FaTrash /> Withdraw
                      </Button>
                    </ButtonGroup>
                  </>
                )}
              </Card>
            ))}
          </Grid>
        </Container>
      </PageWrapper>
    </>
  );
};

export default UserProfile;
