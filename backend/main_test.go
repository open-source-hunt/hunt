package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestWelcomeHandler(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/welcome", nil)
	rr := httptest.NewRecorder()

	welcomeHandler(rr, req)

	var message WelcomeMessage
	assert.NoError(t, json.NewDecoder(rr.Body).Decode(&message))
	assert.Equal(t, "Hello, World!", message.Message)
	assert.Equal(t, http.StatusOK, rr.Code)
}
