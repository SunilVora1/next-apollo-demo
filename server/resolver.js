import { faker } from '@faker-js/faker';

function createUser() {
	return {
		name: faker.name.findName(),
		address: `${faker.address.buildingNumber()} ${faker.address.street()} ${faker.address.cityName()}`,
		email: faker.internet.email(),
		phoneNumber: faker.phone.phoneNumber()
	};
}


export default {
  Query: {
    employees: () => {
      let result = [];
      Array.from({ length: 2000 }).forEach(() => {
        result.push(createUser());
      });
      return result;
    }
  }
}