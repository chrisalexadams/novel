import React, { useEffect, useCallback, useRef } from 'react'
import Layout, { Row, Main, Container } from 'components/layouts/WideStretched'
import Header from 'components/headers/Underline'
import { useUrbit } from 'components/useUrbit'

export default function Index() {
  const urbit = useUrbit()

  const doPoke = useCallback(async () => {
    await urbit.poke({
      app: "hood",
      mark: "helm-hi",
      json: "index page poke"})
  }, [urbit])

  // This will fire every time you navigate to the index page
  // Use /pages/_app.js for once-per-app effects
  useEffect(() => {
    if (urbit) {
      doPoke()
    }
  }, [urbit])

  const hiddenFileInput = useRef(null);

  const handleChange = event => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      const body = new FormData();
      body.append("image", i);
    }
  };

  const handleClick = event => {
    hiddenFileInput.current.click();
  };  

  function handleFileInput() {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(file);

    reader.onloadend = () => {
      const base64String = reader.result?.toString().replace(/^data:.+;base64,/, '');
      this.setState({ base64: base64String })
      console.log(this.state.base64);
    }
  }
 
  function uploadBook() {
    console.log("Upload book to " + "~" + window.ship);
    const fileInput = useRef<HTMLInputElement>(null);

    return(
      <>
        <input
          type="file"
          accept="application/epub+zip"
          hidden
          ref={fileInput}
          onPress={handleFileInput}
        >
        </input>
        </>
    )
  
  }

  // urbit.scry
  function catalog() {
    console.log("Catalog on " + window.ship)
    urbit.scry({
      app: "novel",
      path: "/books"
    })
    .then(
      (result) => {
        console.log(result)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  function pokeIndex() {
    console.log("Poke " + window.ship)
    urbit.poke ({
      app: "hood",
      mark: "helm-hi",
      json: "index page poke"})
  }

  function clear() {
    console.log("Clear!")

    const target = "~" + window.ship;
    console.log(target);
    urbit.poke({
      app: "novel",
      mark: "novel-action",
      json: {"clear": target}
    })
  }

  function pop() {
    console.log(window.ship)
    urbit.poke({
      app: "novel",
      mark: "novel-action",
      json: {"pop": "~" + window.ship}
    })
  };

  function push() {
    const target = "~" + window.ship;
    urbit.poke({
      app: "novel",
      mark: "novel-action",
      json: {"push": {"target": target, "value": val}}
    })
    
  }

  return (
    <Layout className="text-gray-800 transition-colors duration-200 bg-gray-50 dark:bg-gray-800 dark:text-white">
      <Row>
        <Container>
          <Header />
        </Container>
      </Row>
      <Main>
        <Container>
          <div className="py-6 px-14 sm:px-9">
            <div >
              {!urbit && <span>Waiting on ship booting...</span>}
              <div>
                <br></br>
                <br></br>

                <input type="file"
                   ref={hiddenFileInput}
                  onChange={handleChange}
                  accept="application/epub+zip"
                  style={{ display: 'none' }} />
                  
                    <button onClick={handleClick} className='p-2 mx-10 bg-red-300 rounded hover:bg-red-600 hover:text-white'> 
                      Upload Book 
                    </button>
                    <button onClick={() => uploadBook()} className='p-2 mx-10 bg-red-300 rounded hover:bg-red-600 hover:text-white'>
                      uploadBook() 
                    </button>
                    <button onClick={() => catalog()} className='p-2 mx-10 bg-blue-300 rounded hover:bg-blue-600 hover:text-white'> 
                      catalog() 
                    </button>
                        <br></br>
                        <br></br>
                    <button onClick={() => pokeIndex()} className='p-2 mx-10 bg-green-300 rounded hover:bg-green-600 hover:text-white'>             
                      Poke Index 
                    </button>
                    <button onClick={() => clear()} className='p-2 mx-10 bg-purple-300 rounded hover:bg-purple-600 hover:text-white'> 
                      clear() 
                    </button>
                    <button onClick={() => pop()} className='p-2 mx-10 bg-orange-300 rounded hover:bg-orange-600 hover:text-white'>
                      pop() 
                    </button>
           
            <Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              <input
                type="text"
                placeholder="Value"
              
                onChange={(e) => this.setState({val: e.target.value})} />
                <button onClick={() => push()}>Push to Ship</button>
           </Container>
            </div>
          </div>
          </div>
        </Container>
      </Main>
      
      <Row className="text-gray-800 bg-gray-400 border-t border-gray-300">
        <Container>
          Hacked by ~lomseg-laclut, "raygun"~dirmyn-raglun & ~hodreb-racdem
        </Container>
      </Row>
    </Layout>
  )
}
