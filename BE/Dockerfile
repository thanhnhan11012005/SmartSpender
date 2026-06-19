# Stage 1: Build the application
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app
COPY pom.xml .
# Fetch all dependencies. This step will be cached unless pom.xml changes
RUN mvn dependency:go-offline -B
# Copy source code and build
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Run the application
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar

# Define port
EXPOSE 8080

# Environment variables that should be overridden by Cloud Provider
ENV DB_HOST=localhost
ENV DB_PORT=5432
ENV DB_NAME=smartspender
ENV DB_USER=postgres
ENV DB_PASSWORD=password
ENV SPRING_PROFILES_ACTIVE=prod

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
