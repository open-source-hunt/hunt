package main

import (
	"encoding/json"
	"log"
	"net/http"
)

const PORT = ":8080"

type WelcomeMessage struct {
	Message string `json:"Message"`
}

func welcomeHandler(w http.ResponseWriter, r *http.Request) {
	message := WelcomeMessage{Message: "Hello, World!"}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(message)
}

func main() {
	http.HandleFunc("/api/welcome", welcomeHandler)

	log.Printf("Server starting on port %v", PORT)
	if err := http.ListenAndServe(PORT, nil); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
