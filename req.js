const axios = require("axios")


const Boststrap =  () => {
    const url = process.argv.slice(2)[0];

    try {
      let count = 0
        setInterval( async () => {
            try {
              await axios.default.get(url)
            } catch (error) {
                console.log(error.message);
                Boststrap()
            }
        }, 0.01)
    } catch (error) {
        Boststrap()
    }
}

Boststrap()


