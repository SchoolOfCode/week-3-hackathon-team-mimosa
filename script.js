console.log("hello")

// url for trivia site: https://opentdb.com/api.php?amount=10

async function fetchData() {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Handle your data
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle any errors
    }
  }