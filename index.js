const crypto = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config;
const axios = require("axios");

const app = express();

const signingSecret = "secret_f5f59e6dac534e9996e0ee9a81f73fda";
let dataFetch = "Nothing";

var jsonParser = bodyParser.json();

app.use(express.json({ extended: false }));

app.post("/", jsonParser, (req, res) => {
  const body = req.body;
  const headers = req.headers;

  const signature = crypto
    .createHmac("sha256", Buffer.from(signingSecret))
    .update(JSON.stringify(body), "utf-8")
    .digest("hex");

  if (headers["signature"] === signature) {
    console.log("Signature Verified. ", body);
    dataFetch = body;
    res.status(200).json({
      message: "Genuine Message Received",
    });
    return;
  }

  console.log(
    "Signature Verification Failed. The incoming payload is fraudulent."
  );
  res.status(500).json({
    message: "Fraudulent Message Received",
  });
});

app.get("/", (req, res) => {
  const temp = dataFetch;
  dataFetch = "Nothing";
  res.send(temp);
});

app.post("/mint/vitalik/:address", async (req, res) => {
  const config = {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
      "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
    },
  };

  const body = JSON.stringify({
    recipient: "solana:" + req.params.address,
    metadata: {
      name: "Vitalik Buterin",
      image:
        "https://bafybeidibm3ws7t2zmgk4vg7gd3fdfndtu3ywdgk6hpqclgjtqsb266ar4.ipfs.w3s.link/Vitalik%20Card.png",
      description: "Founder of Ethereum",
    },
  });

  const response = await axios
    .post(
      "https://staging.crossmint.com/api/2022-06-09/collections/969c472e-c8db-4fb4-8af9-f33c232077c8/nfts",
      body,
      config
    )
    .catch((error) => {
      return res.status(500).send(err);
    });

  if (response) {
    return res.json(response.data);
  } else {
    return res.status(500).send("Server error");
  }
});

app.post("/mint/sandeep/:address", async (req, res) => {
  const config = {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
      "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
    },
  };

  const body = JSON.stringify({
    recipient: "solana:" + req.params.address,
    metadata: {
      name: "Sandeep Nailwal",
      image:
        "https://bafybeigyect3lemazksr3ko3ok4szkeqkbcm66ftmwvzcnrqxavb6ocdoi.ipfs.w3s.link/Sandeep%20Card.png",
      description: "Founder of Polygon",
    },
  });

  const response = await axios
    .post(
      "https://staging.crossmint.com/api/2022-06-09/collections/969c472e-c8db-4fb4-8af9-f33c232077c8/nfts",
      body,
      config
    )
    .catch((error) => {
      return res.status(500).send(err);
    });

  if (response) {
    return res.json(response.data);
  } else {
    return res.status(500).send("Server error");
  }
});

app.post("/mint/sandeep/:address", async (req, res) => {
  const config = {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
      "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
    },
  };

  const body = JSON.stringify({
    recipient: "solana:" + req.params.address,
    metadata: {
      name: "Sandeep Nailwal",
      image:
        "https://bafybeigyect3lemazksr3ko3ok4szkeqkbcm66ftmwvzcnrqxavb6ocdoi.ipfs.w3s.link/Sandeep%20Card.png",
      description: "Founder of Polygon",
    },
  });

  const response = await axios
    .post(
      "https://staging.crossmint.com/api/2022-06-09/collections/969c472e-c8db-4fb4-8af9-f33c232077c8/nfts",
      body,
      config
    )
    .catch((error) => {
      return res.status(500).send(err);
    });

  if (response) {
    return res.json(response.data);
  } else {
    return res.status(500).send("Server error");
  }
});

app.post("/mint/anatoly/:address", async (req, res) => {
  const config = {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
      "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
    },
  };

  const body = JSON.stringify({
    recipient: "solana:" + req.params.address,
    metadata: {
      name: "Anatoly Yakovenko",
      image:
        "https://bafybeickgawhzcwdmvus6qlilq3i7sfry3vf6n3gjcjw5k4nzsvp74w7am.ipfs.w3s.link/Anatoly%20Card.png",
      description: "Founder of Solana",
    },
  });

  const response = await axios
    .post(
      "https://staging.crossmint.com/api/2022-06-09/collections/969c472e-c8db-4fb4-8af9-f33c232077c8/nfts",
      body,
      config
    )
    .catch((error) => {
      return res.status(500).send(err);
    });

  if (response) {
    return res.json(response.data);
  } else {
    return res.status(500).send("Server error");
  }
});

app.post("/mint/mert/:address", async (req, res) => {
  const config = {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
      "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
    },
  };

  const body = JSON.stringify({
    recipient: "solana:" + req.params.address,
    metadata: {
      name: "Mert Mumtaj",
      image:
        "https://bafybeifsllggg77etqmsiqkta2ms7uhkrazpn3ssslgiy546ci4pnbvrmu.ipfs.w3s.link/Mert%20card.png",
      description: "Founder of Helius",
    },
  });

  const response = await axios
    .post(
      "https://staging.crossmint.com/api/2022-06-09/collections/969c472e-c8db-4fb4-8af9-f33c232077c8/nfts",
      body,
      config
    )
    .catch((error) => {
      return res.status(500).send(err);
    });

  if (response) {
    return res.json(response.data);
  } else {
    return res.status(500).send("Server error");
  }
});

app.post("/mint/cl207/:address", async (req, res) => {
  const config = {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-client-secret": "sk_test.2d726b3c.e2b6f527018e88ad299fbfc7c39a1821",
      "x-project-id": "7f12ef92-e40f-43c9-af10-d4d585656d65",
    },
  };

  const body = JSON.stringify({
    recipient: "solana:" + req.params.address,
    metadata: {
      name: "CL207",
      image:
        "https://bafybeigh4qfn72fjardnkyfrqy4b6hsvl7s63lq3ls7rwfreziq53uhy4y.ipfs.w3s.link/CL207%20Card.png",
      description: "Cat with a hazmat suit",
    },
  });

  const response = await axios
    .post(
      "https://staging.crossmint.com/api/2022-06-09/collections/969c472e-c8db-4fb4-8af9-f33c232077c8/nfts",
      body,
      config
    )
    .catch((error) => {
      return res.status(500).send(err);
    });

  if (response) {
    return res.json(response.data);
  } else {
    return res.status(500).send("Server error");
  }
});

app.listen(8080, () => {
  console.log(`⚪ Sphere example webhook signing server :${8080}`);
});
