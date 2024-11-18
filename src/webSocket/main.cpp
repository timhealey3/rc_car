#include <websocketpp/config/asio_no_tls_client.hpp>
#include <websocketpp/client.hpp>
#include <iostream>

typedef websocketpp::client<websocketpp::config::asio_client> client;

int main() {
  bool serverStatusInd = false;
  std::cout << "Server Status: " << serverStatusInd << "\n";
  return 0;
}
