import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "../components/Link/Link";
import List from "../components/List/List";

const ProfileWrapper = styled.div`
  width: 50%;
  margin: 10px auto;
`;

const Avatar = styled.img`
  width: 150px;
`;

export default function Profile() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/sergio-al")
      .then((resData) => resData.json())
      .then((dataJSON) => {
        setData(dataJSON);
        return dataJSON;
      })
      .then((data) => fetch(data.repos_url))
      .then((resRepos) => resRepos.json())
      .then(setRepositories)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);

  if (loading) return <p>Loading component</p>;

  if (loading || error) return <div>{loading ? "loading..." : error}</div>;

  const items = [
    {
      label: "html_url",
      value: <Link url={data.html_url} title="Github URL" />,
    },
    {
      label: "repos_url",
      value: data.repos_url,
    },
    {
      label: "name",
      value: data.name,
    },
    {
      label: "company",
      value: data.company,
    },
    {
      label: "location",
      value: data.location,
    },
    {
      label: "email",
      value: data.email,
    },
    {
      label: "bio",
      value: data.bio,
    },
  ];

  const projects = repositories.map((repository) => ({
    label: repository.name,
    value: <Link url={repository.html_url} title="Github URL" />,
  }));

  return (
    <ProfileWrapper>
      <Avatar alt="profile" src={data.avatar_url} />
      <List title="Profile" items={items} />
      <List title="Projects" items={projects} />
    </ProfileWrapper>
  );
}
