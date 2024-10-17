// Connector interface for different databases
interface DatabaseConnector {
  insert(data: string): void;
  read(): string;
}

// MySQL implementation 
class MySQLConnector implements DatabaseConnector {
  insert(data: string): void {
    console.log(`Insertando datos en MySQL: ${data}`);  
  }

  read(): string {
    return "Datos desde MySQL";  // "Datos desde MySQL"
  }
}

// PostgreSQL implementation
class PostgreSQLConnector implements DatabaseConnector {
  insert(data: string): void {
    console.log(`Insertando datos en PostgreSQL: ${data}`);
  }

  read(): string {
    return "Datos desde PostgreSQL";  
  }
}

// Abstraction class for database handling
class Database {
  protected connector: DatabaseConnector;

  constructor(connector: DatabaseConnector) {
    this.connector = connector;
  }

  save(data: string): void {
    this.connector.insert(data); 
  }

  fetch(): string {
    return this.connector.read();
  }
}

// Refined abstraction with more specific operations
class DatabaseApplication extends Database {
  showData(): void {
    console.log(this.fetch());  
  }
}

// Usage
const mysqlConnector = new MySQLConnector();
const app = new DatabaseApplication(mysqlConnector);
app.save("Inventario actualizado");
app.showData();  
