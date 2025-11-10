FROM eclipse-temurin:17-jre-alpine

RUN apk add --no-cache curl

RUN addgroup -S spring && adduser -S spring -G spring
USER spring

WORKDIR /app

COPY target/*.jar app.jar

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/actuator/health || exit 1

ENTRYPOINT ["java", "-jar", "/app/app.jar"]