import auth from "firebase-admin"


const serverConfig = {
    "type": "service_account",
    "project_id": "nuxt3app-e98c3",
    "private_key_id": "78c9b21069bc6eb230957b868c9bf9eb3ed8b02b",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC7iX6PbAZEmov6\nCzXYVyMGOZTlKcQpjmnHZUD1BDtqF+z0KCMVaGxMSPVe1SoMURL+YpIMX2xnYt74\nEeophglDq/msNqSILTGAoE15185FsLVzo/SDXXZGuQHRd8H6d3+YMUTspk2z84/6\nHqNE6bnLMvoZz/yIrsE00lHk4fAoeBY7MAiKio2h/uu+XJ/IGlshQfUKW5xVHtea\nXFtb2O1kcwA9YpnBUf8Cg+mPr7i0EcyZ8wih7nZ1GnykwjrUMYCwaJpB2UXfwzGV\ns2FEko/qTxyPnFglCH/A12tK8ezsHlM4II98quJjgjA9KoPzUe2u4u0RHmE9NhcI\nGwO9JdLdAgMBAAECggEAKotz/I4NcvlbqZdq+QA1qCcehgmeYK4YBb4NCTjTUMuK\nPE6xvNzSetDvZ3r0/dPTuwW6K9fnFCJMQptv08k+Z02Hx/+ifmlASnWzdeGVQF6p\nH4mxwi6NE1jL1o00YsHC3tBImmZVCO7Huj7Cm/LpLTXMotf6Krj4iGbxYLs4HDnU\nZNkFAx4YUw/BQ6D3PlHSj/VuinmTpGoydVQD/a9n0Mk+lLajrNd4ZXTO6V6VvMNl\nrOUDcbq7Zpa+ej6QkWaOkmpDTg7BJUZb8QB3nJjOL+aCO655D0s94bcs3U7ne91l\nE2lwbv3GFvhKCpa4LazJEZeZU5JcnrXuTIo8REi/UQKBgQDrss8Re3ZGGa+8tlyg\npEc+Pi1KUcssuKtsyR3g/Hy/DnQzbYNB2I/P0+Y4H+deW9jU0xk+1KFnKFuX9ih6\nqeJ3u7z85lpmoAa6zmlYh5H9mgxnuDCXiUVsMuHPTt1WqhoePbISMaptRvJw/SwR\n/Ysg7hpR465krdFmJZlvGgobjQKBgQDLsLgGK4kDWVGXzsQgOpudjBjuyYW6dtyD\nLUBd1okFryFJYTod56DS3uzkSuwXol4F6ZPAJ8ooinVgu5UkxOThFjtl6IxfRar5\nkomkO6H0lrcXp7EqHUdMYFEJvWaJnWjuhyLsrAC3+a7qp9I3A7GrJiVZv6dMMKXV\nJKIVdPMYkQKBgA7EUyjbPVvC/Dmsiz0dTcFej+PaIAqbP1I/f3m7F+24cBtQvyp+\n8POqaQAXL52/z2P2HdzL4Zje9G4e5AZbYm7x+jM2E2/eks1dZUhApirnXeOZrKGx\n3gGbZn5giImHer9uShvNtMnH6iSeGAbAhdj4UfnTc/em1Dm8HVLSpNN5AoGASX7P\nN7K3slSlIzCBBdv/0F3/lRFzxi8jK9XFFtbVBA8H5LFHRgkQt2Wmdk0uWOzGHj4E\niN4SjIRBDBFDJExDBZB/CCtbkvjRU1HzhiXaLyW+lLN2Mmr0EfPi6a/Ecr0wYniy\nOlFpxPg7jAHX0O/tSILwES0dEVmwTHL2ZOWY3XECgYBO3jELF7/XjAkowncNRB0O\nn5/p5v55F/q9llisL4jU3fB/hagi3EyyZqtPWpw7SwaG4A8e/Sqok6XXfofg5oS/\nlGCJw0PLPjFfYetB+YSMnOIRyAXkK7pdUWgxwW4uHKGfwPNPtVHLikX7FvhKsjkM\nk0v1MZiN0VhykkX76cjUwA==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-1s9ns@nuxt3app-e98c3.iam.gserviceaccount.com",
    "client_id": "113717174766281322450",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1s9ns%40nuxt3app-e98c3.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}
  
let app

export default function initFirebase()
{
    if(!app)
    app = auth.initializeApp({
        credential: auth.credential.cert(serverConfig)
    })
}