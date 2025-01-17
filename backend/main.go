package main

import (
	"encoding/json"
	"net/http"
)

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
	http.ListenAndServe(":8080", nil)
}
