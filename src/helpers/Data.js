const url = "https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users";
export const Data = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const Add = async (data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const Update = async (data) => {
  try {
    const response = await fetch(`${url}/${data.id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const Delete = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};
