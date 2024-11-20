CXX = clang++
CXXFLAGS = -std=c++11 -I/usr/local/include -I/opt/homebrew/include -I/opt/homebrew/opt/openssl/include
LDFLAGS = -L/usr/local/lib -L/opt/homebrew/lib -L/opt/homebrew/opt/openssl/lib -lboost_system -lssl -lcrypto

TARGET = main
SOURCES = main.cpp

all: $(TARGET)

$(TARGET): $(SOURCES)
	$(CXX) $(CXXFLAGS) $(SOURCES) -o $(TARGET) $(LDFLAGS)

clean:
	rm -f $(TARGET)

