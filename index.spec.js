//import your functions and variables to check against here.

const { firstName, lastName, homeCountry, fullName, isJorge, mySentence, theAnswer, funkyInitials, x, y, var1, var2, var3, var4q, var4a} = require('./index.js')

  describe("Testing name and country vars",() => {
    test("firstName, lastName, homeCountry are strings that are not empty ", () => {
      const firstNameLength = firstName.length
      const lastNameLength = lastName.length
      const homeCountryLength = homeCountry.length
      // const dataType = typeof firstName
      expect(firstNameLength).toBeGreaterThan(2)
      expect(lastNameLength).toBeGreaterThan(2)
      expect(homeCountryLength).toBeGreaterThan(2)
      // expect (dataType).toEqual("string")
    })
  })

  describe("FullName is firstName + ' ' + lastName",() => {
    test("is fullName a concat of their names ", () => {
      expect(fullName).toEqual(firstName + ' ' + lastName)
      expect (typeof fullName).toEqual("string")
    })
  })

    describe("funkyInitials var",() => {
    test("is funkyInitials last initals + uppercase ", () => {
      let output = (firstName.charAt(firstName.length-1) + lastName.charAt(lastName.length-1)).toUpperCase()
      expect(funkyInitials).toEqual(output)
      expect (typeof funkyInitials).toEqual("string")
    })
  })

    describe("A full sentence",() => {
    test("mySentence is correct", () => {
      expect(mySentence).toEqual("My name is " + fullName + ". I am from " + homeCountry + ".");
      expect (typeof mySentence).toEqual("string")
    })
  })


  describe("isJorge var",() => {
    test("isJorge is true if firstName isJorge and false otherwise ", () => {
      if (firstName =="Jeorg") {
        expect(isJorge).toBe(true)
      } else {
        expect(isJorge).toBe(false)  
      }
    }) 
  })

     describe("x var",() => {
    test("that x is the integer 21.42 ", () => {
      expect (typeof x).toEqual("number")
      expect(x).toBe(21.46)
      // expect (dataType).toEqual("string")
    })
  })

  describe("y var",() => {
    test("y is a whole number, 15 ", () => {
      expect(y).toEqual(15)
      expect (typeof y).toEqual("number")
    })
  })

    describe("var3 var",() => {
    test("var three is an integer, 42 ", () => {
      expect(typeof var1).toEqual("string")
      expect (var3).toEqual(42)
    })
  })

    describe("var4q and var4a var",() => {
    test("is it correct", () => {
      expect(var4a).toEqual("No remainder.")
    })
  })

